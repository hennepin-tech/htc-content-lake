// This module defines the structure of the Marketing & Communications dataset as it appears in the Sanity Studio

import S from '@sanity/desk-tool/structure-builder'
import {
    FiBookOpen,
    FiFileText,
    FiHome,
    FiTag,
    FiUsers
} from 'react-icons/fi'

export default () => {
    return S.list()
      .title('Marketing Content')
      .items([
        // S.listItem()
        //     .title('Home Page')
        //     .child(
        //         S.editor()
        //             .schemaType('homepage')
        //             .documentId('homepage')
        //             .title('Home Page')
        //     )
        //     .icon(FiHome),
        // S.divider(),
        S.listItem()
          .title('Blog')
          .child(
            S.list()
            .title('Blog Content')
            .items([
                // Blog Homepage
                S.listItem()
                    .title('Blog Homepage')
                    .child(
                        S.editor()
                            .schemaType('blogHomepage')
                            .documentId('blogHomepage')
                            .title('Blog Homepage')
                    )
                    .icon(FiHome),
                S.divider(),
                // Blog Posts
                S.listItem()
                    .title('Blog Posts')
                    .child(
                        S.documentTypeList('post')
                        .title('Blog Posts')
                        .child((documentId) =>
                            S.document()
                            .id('post')
                            .schemaType('post')
                            .documentId(documentId)
                            )
                    )
                    .icon(FiFileText),
                // Blog Post Categories
                S.listItem()
                    .title('Post Categories')
                    .child(
                        S.documentTypeList('postCategory')
                        .title('Post Categories')
                        .child((documentId) =>
                            S.document()
                            .id('postCategory')
                            .schemaType('postCategory')
                            .documentId(documentId)
                            )
                    )
                    .icon(FiTag),
                // Blog Authors
                S.listItem()
                    .title('Authors')
                    .child(
                        S.documentTypeList('author')
                        .title('Authors')
                        
                        .child((documentId) =>
                            S.document()
                            .id('author')
                            .schemaType('author')
                            .documentId(documentId)
                        )
                        
                    )
                    .icon(FiUsers),
            ])
          )
          .icon(FiBookOpen),
      ])
}

