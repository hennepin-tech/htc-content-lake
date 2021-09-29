export default {
    name: 'academicProgram',
    title: 'Academic program',
    type: 'document',
    fields: [
        {
            name: 'programName',
            title: 'Program Name',
            type: 'string',
        },
        {
            name: 'category',
            title: 'category',
            type: 'reference',
            to: [{type: 'programCategory'}]
        },
    ],
}