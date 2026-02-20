import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'concept',
  title: 'Concept',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'difficultyBase',
      title: 'Base Difficulty (ELO)',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mapPosition',
      title: 'Map Position',
      type: 'object',
      fields: [
        {name: 'x', type: 'number', title: 'X Coordinate'},
        {name: 'y', type: 'number', title: 'Y Coordinate'}
      ]
    }),
    defineField({
      name: 'biome',
      title: 'Biome',
      type: 'string',
      options: {
        list: ['meadow', 'forest', 'mountain', 'canyon', 'peak']
      }
    }),
    defineField({
      name: 'prerequisites',
      title: 'Prerequisites',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'concept'}]}]
    }),
    defineField({
      name: 'learningObjectives',
      title: 'Learning Objectives',
      type: 'array',
      of: [{type: 'text'}]
    }),
    defineField({
      name: 'introductionContent',
      title: 'Introduction Content',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'commonMisconceptions',
      title: 'Common Misconceptions',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'misconception', type: 'text', title: 'Misconception'},
          {name: 'correction', type: 'text', title: 'Correction'}
        ]
      }]
    }),
    defineField({
      name: 'estimatedTime',
      title: 'Estimated Time (minutes)',
      type: 'number'
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'reference',
      to: [{type: 'badge'}]
    })
  ]
})
