import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'attempt',
  title: 'Attempt',
  type: 'document',
  fields: [
    defineField({
      name: 'camper',
      title: 'Camper',
      type: 'reference',
      to: [{type: 'camper'}],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'reference',
      to: [{type: 'problem'}],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'concept',
      title: 'Concept',
      type: 'reference',
      to: [{type: 'concept'}]
    }),
    defineField({
      name: 'userAnswer',
      title: 'User Answer',
      type: 'text'
    }),
    defineField({
      name: 'isCorrect',
      title: 'Is Correct',
      type: 'boolean',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'responseTime',
      title: 'Response Time (seconds)',
      type: 'number'
    }),
    defineField({
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'hintUsed',
      title: 'Hint Used',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'eloChange',
      title: 'ELO Change',
      type: 'number'
    })
  ]
})
