export default {
    name: 'blogHomepage',
    title: 'Blog homepage',
    type: 'document',
    fields: [
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            description: 'The main heading in the hero section',
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