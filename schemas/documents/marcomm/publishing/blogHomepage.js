export default {
    name: 'blogHomepage',
    title: 'Blog homepage',
    description: '',
    type: 'document',
    fields: [
        {
            name: 'featuredPost',
            title: 'Featured Post',
            type: 'reference',
            to: [{type: 'post'}],
            validation: Rule => Rule.required()
        },
    ],
}