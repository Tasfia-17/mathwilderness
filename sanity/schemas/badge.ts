import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'badge',
  title: 'Badge',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image'
    }),
    defineField({
      name: 'requirement',
      title: 'Requirement',
      type: 'text'
    }),
    defineField({
      name: 'rarity',
      title: 'Rarity',
      type: 'string',
      options: {
        list: ['common', 'rare', 'epic', 'legendary']
      }
    })
  ]
})
