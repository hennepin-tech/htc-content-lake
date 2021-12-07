export default {
  name: 'surveyResponse',
  title: 'Survey response',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Survey Participant Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Survey Participant Email',
      type: 'string',
    },
    {
      name: 'responses',
      title: 'Responses',
      type: 'array',
      of: [{ type: 'string' }]
    },
  ],
}