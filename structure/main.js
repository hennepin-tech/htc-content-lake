import client from 'part:@sanity/base/client'

import  marcomm from './components/marcomm'
import  admin from './components/admin'
import denied from './components/denied'

const { dataset } = client.clientConfig

const groupQuery = '* [_type == "system.group" && $identity in members] {_id}'

export default () => client.fetch(groupQuery)
  .then(docs => docs.map(doc => doc._id.split('.').pop()))
  .then(groupNames => {
    console.log(groupNames)
    const deskItems = []

    if (dataset == 'marcomm') {
      return marcomm();
    }
    
    if (dataset == 'admin') {
      if (groupNames.includes('administrator'))
        return admin();
      } else { return denied(); }
    }
  )
  .catch(() => {
    return marcomm();
  })


  