export default {
  name: 'featuredProgram',
  title: 'Featured program',
  type: 'document',
  fields: [
    {
      name: 'programName',
      title: 'Program Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'pageLink',
      title: 'Program Page Link',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
      validation: Rule => Rule.required()
    },
  ],
}