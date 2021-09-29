// This module defines the structure of the Student Affairs dataset as it appears in the Sanity Studio

import S from '@sanity/desk-tool/structure-builder'

export default () => {
    return S.list()
    .title('Student Affairs Content')
    .items([
      S.listItem()
        .title('Current title')
        // .child(
        //   S.documentTypeList('myType')
        //     .title('Current title')
        //     .filter('_type == $type')
        //     .params({type: 'myType'})
        // ),
    ])
}