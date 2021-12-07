export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'homepageAccordion',
      title: 'Accordion',
      type: 'array',
      of: [{type: 'accordionItem'}]
    }
  ],
}