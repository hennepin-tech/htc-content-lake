export default {
  name: 'accordionItem',
  title: 'Accordion Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The text that displays when the accordion is closed',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      description: 'The content inside the accordion',
      type: 'blockContent',
    },
  ],
}