export default {
  name: 'heroSection',
  title: 'Hero section',
  type: 'object',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'The main heading in the hero section',
  },
  {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'mainImage',
      description: 'The background image of the hero section',
      validation: Rule => Rule.required()
  },
  {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'link',
      validation: Rule => Rule.max(12)
  },
  ],
}