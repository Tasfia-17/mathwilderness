import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'dailyQuest',
  title: 'Daily Quest',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['solveProblems', 'maintainStreak', 'masterConcept']
      }
    }),
    defineField({
      name: 'target',
      title: 'Target',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'rewardXP',
      title: 'Reward XP',
      type: 'number',
      validation: Rule => Rule.required()
    })
  ]
})
