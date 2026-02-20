import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'problem',
  title: 'Problem',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'questionText',
      title: 'Question Text',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'solutionSteps',
      title: 'Solution Steps',
      type: 'array',
      of: [{type: 'text'}]
    }),
    defineField({
      name: 'correctAnswer',
      title: 'Correct Answer',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'answerType',
      title: 'Answer Type',
      type: 'string',
      options: {
        list: ['multipleChoice', 'numeric', 'expression']
      }
    }),
    defineField({
      name: 'options',
      title: 'Options (for multiple choice)',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'difficultyElo',
      title: 'Difficulty (ELO)',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'conceptBreakdown',
      title: 'Concept Breakdown',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'concept', type: 'reference', to: [{type: 'concept'}]},
          {name: 'weight', type: 'number', validation: Rule => Rule.min(0).max(1)}
        ]
      }]
    }),
    defineField({
      name: 'hints',
      title: 'Hints',
      type: 'array',
      of: [{type: 'text'}]
    }),
    defineField({
      name: 'timeEstimate',
      title: 'Time Estimate (seconds)',
      type: 'number'
    }),
    defineField({
      name: 'attemptsCount',
      title: 'Attempts Count',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'successRate',
      title: 'Success Rate',
      type: 'number',
      initialValue: 0
    })
  ]
})
