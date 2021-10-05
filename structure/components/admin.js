// This module defines the structure of the Admin dataset as it appears in the Sanity Studio

import S from '@sanity/desk-tool/structure-builder'

export default () => {
    return S.list()
    .title('Admin Content')
    .items([
      S.listItem()
        .title('No Content')
        // .child(
        //   S.documentTypeList('myType')
        //     .title('Current title')
        //     .filter('_type == $type')
        //     .params({type: 'myType'})
        // ),
    ])
}