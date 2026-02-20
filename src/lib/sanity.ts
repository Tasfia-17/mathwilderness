import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

// GROQ Queries
export const queries = {
  // Get camper dashboard data
  getCamperDashboard: (camperId: string) => `
    *[_type == "camper" && _id == "${camperId}"][0]{
      _id,
      name,
      eloRating,
      xp,
      level,
      streakDays,
      lastActive,
      mascot->{name, slug, personalityTraits},
      currentConcept->{title, slug, difficultyBase},
      masteredConcepts[]->{_id, title, slug},
      preferences
    }
  `,

  // Get adaptive problem
  getAdaptiveProblem: (camperId: string, conceptId: string, camperElo: number) => `
    *[_type == "problem" && 
      references("${conceptId}") && 
      difficultyElo >= ${camperElo - 100} && 
      difficultyElo <= ${camperElo + 100} &&
      !(_id in *[_type == "attempt" && camper._ref == "${camperId}"].problem._ref)
    ] | order(abs(difficultyElo - ${camperElo})) [0]{
      _id,
      title,
      questionText,
      answerType,
      options,
      difficultyElo,
      hints,
      timeEstimate
    }
  `,

  // Get concept map with user progress
  getConceptMap: (camperId: string) => `
    *[_type == "concept"] | order(difficultyBase asc){
      _id,
      title,
      slug,
      description,
      difficultyBase,
      mapPosition,
      biome,
      prerequisites[]->{_id, title},
      "isMastered": _id in *[_type == "camper" && _id == "${camperId}"][0].masteredConcepts[]._ref,
      "isUnlocked": count(prerequisites) == 0 || count(prerequisites[!(_ref in *[_type == "camper" && _id == "${camperId}"][0].masteredConcepts[]._ref)]) == 0
    }
  `,

  // Get leaderboard
  getLeaderboard: () => `
    {
      "topCampers": *[_type == "camper"] | order(eloRating desc) [0...10]{
        _id,
        name,
        eloRating,
        level,
        mascot->{name}
      }
    }
  `,

  // Get camper rank
  getCamperRank: (camperId: string) => `
    {
      "rank": count(*[_type == "camper" && eloRating > ^.eloRating]) + 1,
      "camper": *[_type == "camper" && _id == "${camperId}"][0]{
        name,
        eloRating
      }
    }
  `
}

// ELO calculation function
export function calculateEloChange(
  camperElo: number,
  problemElo: number,
  isCorrect: boolean,
  attemptsCount: number
): { newCamperElo: number; newProblemElo: number; eloChange: number } {
  const K = 4 / (1 + 0.5 * attemptsCount)
  const expected = 1 / (1 + Math.pow(10, (problemElo - camperElo) / 400))
  const actual = isCorrect ? 1 : 0
  const eloChange = Math.round(K * (actual - expected))
  
  return {
    newCamperElo: camperElo + eloChange,
    newProblemElo: problemElo - eloChange,
    eloChange
  }
}

// Submit attempt and update ELO
export async function submitAttempt(data: {
  camperId: string
  problemId: string
  conceptId: string
  userAnswer: string
  isCorrect: boolean
  responseTime: number
  hintUsed: boolean
}) {
  // Get current ELO ratings
  const camper = await client.fetch(`*[_type == "camper" && _id == "${data.camperId}"][0]{eloRating}`)
  const problem = await client.fetch(`*[_type == "problem" && _id == "${data.problemId}"][0]{difficultyElo, attemptsCount, successRate}`)
  
  // Calculate new ELO
  const { newCamperElo, newProblemElo, eloChange } = calculateEloChange(
    camper.eloRating,
    problem.difficultyElo,
    data.isCorrect,
    problem.attemptsCount
  )
  
  // Create attempt document
  const attempt = await client.create({
    _type: 'attempt',
    camper: { _type: 'reference', _ref: data.camperId },
    problem: { _type: 'reference', _ref: data.problemId },
    concept: { _type: 'reference', _ref: data.conceptId },
    userAnswer: data.userAnswer,
    isCorrect: data.isCorrect,
    responseTime: data.responseTime,
    hintUsed: data.hintUsed,
    eloChange,
    timestamp: new Date().toISOString()
  })
  
  // Update camper ELO
  await client.patch(data.camperId).set({ eloRating: newCamperElo }).commit()
  
  // Update problem stats
  const newSuccessRate = ((problem.successRate * problem.attemptsCount) + (data.isCorrect ? 1 : 0)) / (problem.attemptsCount + 1)
  await client.patch(data.problemId).set({
    difficultyElo: newProblemElo,
    attemptsCount: problem.attemptsCount + 1,
    successRate: newSuccessRate
  }).commit()
  
  return { attempt, newCamperElo, eloChange }
}
