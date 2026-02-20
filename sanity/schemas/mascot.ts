import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'mascot',
  title: 'Mascot',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'personalityTraits',
      title: 'Personality Traits',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'encouragementStyle',
      title: 'Encouragement Style',
      type: 'text'
    })
  ]
})
