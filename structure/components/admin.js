// This module defines the structure of the Admin dataset as it appears in the Sanity Studio

import S from '@sanity/desk-tool/structure-builder'

export default () => {
    return S.list()
    .title('Admin Content')
    .items([
      S.listItem()
        .title('Survey Tools')
        .child(
          S.documentTypeList('survey')
          .title('Surveys')
          .child((documentId) =>
            S.document()
              .id('survey')
              .schemaType('survey')
              .documentId(documentId)
          )
      ),
    ])
}