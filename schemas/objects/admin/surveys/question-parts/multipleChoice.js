export default {
  name: 'multipleChoice',
  title: 'Multiple choice',
  type: 'object',
  fields: [
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{type: 'string'}]
    },
  ],
}