export default {
  name: 'mainImage',
  title: 'Main image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        metedata: ['palette'],
        hotspot: true,
      }
    },
    {
      name: 'alt',
      title: 'Alt Text',
      description: 'Alternative text is used when the User is using a screen reader, or if the page does not load the image.',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
}