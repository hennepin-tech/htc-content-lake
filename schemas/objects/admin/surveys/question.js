export default {
  name: 'question',
  title: 'Question',
  type: 'object',
  fields: [
    {
      name: 'questionName',
      title: 'Question Name',
      type: 'string',
    },
    {
      name: 'prompt',
      title: 'Question Prompt',
      description: 'The question itself',
      type: 'string',
    },
    {
      name: 'required',
      title: 'Required?',
      description: 'Is the question required?',
      type: 'boolean',
    },
    {
      name: 'questionType',
      title: 'Question Type',
      type: 'string',
      description: 'What type of input should be shown to the user?',
      options: {
        list: [
          'multiple choice',
          'paragraph',
          'string',
          'yes/no',
        ]
      }
    },
    {
      name: 'multipleChoiceQuestion',
      title: 'Multiple Choice Question',
      type: 'multipleChoice',
      hidden: ({ parent }) => parent?.questionType !== 'multiple choice',
    },
  ],
  preview: {
    select: {
      title: 'prompt',
      subtitle: 'questionType',
    }
  },
}