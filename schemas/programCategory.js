export default {
    name: 'programCategory',
    title: 'Program category',
    type: 'document',
    fields: [
        {
            name: 'categoryName',
            title: 'Category Name',
            type: 'string',
        },
        {
            name: 'categoryDescription',
            title: 'Category Description',
            type: 'blockContent',
        },
    ],
}