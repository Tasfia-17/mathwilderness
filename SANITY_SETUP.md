# Math Wilderness - Sanity Backend Setup

## Quick Start

### 1. Create Sanity Project
```bash
cd sanity
npx sanity init
```

Follow prompts:
- Project name: `math-wilderness`
- Dataset: `production`
- Use existing project ID or create new

### 2. Update Config
Edit `sanity/sanity.config.ts` and replace `your-project-id` with your actual project ID.

### 3. Deploy Schemas
```bash
cd sanity
npx sanity deploy
```

### 4. Start Sanity Studio
```bash
npx sanity start
```

Studio will open at `http://localhost:3333`

### 5. Configure Frontend
Copy `.env.example` to `.env.local` and add your Sanity credentials:
```bash
cp .env.example .env.local
```

## Schemas Created

1. **camper** - User profiles with ELO rating, XP, streaks
2. **mascot** - Swift Squirrel, Steady Moose, Wise Owl
3. **concept** - Learning topics (Algebra, Geometry, etc.)
4. **problem** - Math problems with adaptive difficulty
5. **attempt** - User problem attempts with ELO tracking
6. **badge** - Achievement badges
7. **dailyQuest** - Daily challenges

## Sample Data

### Create Mascots
In Sanity Studio, create 3 mascot documents:

**Swift Squirrel**
- Name: Swift Squirrel
- Slug: swift-squirrel
- Description: Energetic and quick-thinking
- Personality Traits: ["Fast", "Eager", "Adaptive"]
- Encouragement Style: "Let's go! You've got this!"

**Steady Moose**
- Name: Steady Moose
- Slug: steady-moose
- Description: Thoughtful and patient
- Personality Traits: ["Methodical", "Calm", "Reliable"]
- Encouragement Style: "Take your time, think it through."

**Wise Owl**
- Name: Wise Owl
- Slug: wise-owl
- Description: Analytical and strategic
- Personality Traits: ["Insightful", "Focused", "Strategic"]
- Encouragement Style: "Consider all angles before answering."

### Create Concepts
**Algebra Trail**
- Title: Algebra Trail
- Slug: algebra-trail
- Difficulty Base: 800
- Biome: meadow
- Map Position: {x: 100, y: 400}
- Prerequisites: []

**Geometry Grove**
- Title: Geometry Grove
- Slug: geometry-grove
- Difficulty Base: 1000
- Biome: forest
- Map Position: {x: 300, y: 350}
- Prerequisites: [Reference to Algebra Trail]

**Calculus Canyon**
- Title: Calculus Canyon
- Slug: calculus-canyon
- Difficulty Base: 1200
- Biome: canyon
- Map Position: {x: 500, y: 300}
- Prerequisites: [Reference to Geometry Grove]

**Trigonometry Peak**
- Title: Trigonometry Peak
- Slug: trigonometry-peak
- Difficulty Base: 1400
- Biome: peak
- Map Position: {x: 700, y: 200}
- Prerequisites: [Reference to Calculus Canyon]

### Create Sample Problems
For Algebra Trail, create 5-10 problems with ELO 700-900:

Example:
- Title: "Solve for x"
- Question: "2x + 5 = 13. What is x?"
- Answer Type: numeric
- Correct Answer: "4"
- Difficulty ELO: 750
- Hints: ["Subtract 5 from both sides", "Divide by 2"]

## Frontend Integration

### Fetch Dashboard Data
```typescript
import { client, queries } from './lib/sanity'

const dashboard = await client.fetch(queries.getCamperDashboard(camperId))
```

### Get Adaptive Problem
```typescript
const problem = await client.fetch(
  queries.getAdaptiveProblem(camperId, conceptId, camperElo)
)
```

### Submit Attempt
```typescript
import { submitAttempt } from './lib/sanity'

const result = await submitAttempt({
  camperId: 'camper-id',
  problemId: 'problem-id',
  conceptId: 'concept-id',
  userAnswer: '42',
  isCorrect: true,
  responseTime: 45,
  hintUsed: false
})
```

## ELO System

The system uses chess-style ELO rating:
- K-factor: `4 / (1 + 0.5 * attemptCount)`
- Expected score: `1 / (1 + 10^((problemElo - camperElo)/400))`
- New ELO: `oldElo + K * (actual - expected)`

Both camper and problem ELO update after each attempt.

## GROQ Queries

All queries are in `src/lib/sanity.ts`:
- `getCamperDashboard` - Full dashboard data
- `getAdaptiveProblem` - Next problem based on ELO
- `getConceptMap` - Map with unlock status
- `getLeaderboard` - Top 10 campers
- `getCamperRank` - User's rank

## Next Steps

1. Deploy Sanity Studio to production: `npx sanity deploy`
2. Add sample data through Studio
3. Test queries in Sanity Vision (Studio → Vision tab)
4. Integrate with React frontend
5. Add authentication (Internet Identity or Sanity auth)
