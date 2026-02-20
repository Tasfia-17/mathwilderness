import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'camper',
  title: 'Camper',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'mascot',
      title: 'Mascot',
      type: 'reference',
      to: [{type: 'mascot'}]
    }),
    defineField({
      name: 'eloRating',
      title: 'ELO Rating',
      type: 'number',
      initialValue: 1000,
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'xp',
      title: 'Experience Points',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'number',
      initialValue: 1
    }),
    defineField({
      name: 'streakDays',
      title: 'Streak Days',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'lastActive',
      title: 'Last Active',
      type: 'datetime'
    }),
    defineField({
      name: 'masteredConcepts',
      title: 'Mastered Concepts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'concept'}]}]
    }),
    defineField({
      name: 'currentConcept',
      title: 'Current Concept',
      type: 'reference',
      to: [{type: 'concept'}]
    }),
    defineField({
      name: 'preferences',
      title: 'Preferences',
      type: 'object',
      fields: [
        {name: 'hintsEnabled', type: 'boolean', initialValue: true},
        {name: 'timerEnabled', type: 'boolean', initialValue: true},
        {name: 'soundEnabled', type: 'boolean', initialValue: true}
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'eloRating',
      media: 'mascot.name'
    }
  }
})
