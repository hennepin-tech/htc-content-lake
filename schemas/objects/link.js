export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Display Text',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Internal or External?',
      type: 'string',
      options: { list: ['internal', 'external'] }
    },
    {
      name: 'internalLink',
      title: 'Page to Link To',
      type: 'reference',
      to: [{ type: 'post' }],
      hidden: ({parent}) => !(parent?.type === 'internal')
    },
    {
      name: 'externalLink',
      title: 'Page to Link To',
      type: 'url',
      hidden: ({parent}) => !(parent?.type === 'external')
    },
  ],
}