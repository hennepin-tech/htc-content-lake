export default {
  name: 'survey',
  title: 'Survey',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Survey Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'responses',
      title: 'Responses',
      type: 'number',
    },
    {
      name: 'questions',
      title: 'Survey Questions',
      type: 'array',
      of: [{type: 'question'}],
      validation: Rule => Rule.required().min(1),
    },
  ],
}