import S from '@sanity/desk-tool/structure-builder'
import client from 'part:@sanity/base/client'

import  marcomm from './components/marcomm'
import  studentAffairs from './components/student-affairs'

const { dataset } = client.clientConfig

export default () => {
  if (dataset == 'marcomm') {
    return marcomm();
  }
  
  if (dataset == 'student-affairs') {
    return studentAffairs();
  }
}