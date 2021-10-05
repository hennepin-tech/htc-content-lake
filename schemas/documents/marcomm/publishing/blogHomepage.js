export default {
    name: 'blogHomepage',
    title: 'Blog homepage',
    description: '',
    type: 'document',
    fields: [
        {
            name: 'hero',
            title: 'Hero Section',
            type: 'heroSection',
        },
        {
            name: 'featuredPosts',
            title: 'Featured Posts',
            type: 'reference',
            to: [{type: 'post'}],
            validation: Rule => Rule.required().min(3).max(3)
        },
    ],
}