import React, { useState, useEffect } from 'react'

import { Tab, TabList, TabPanel } from '@sanity/ui'
import { FiSunrise, FiVideo } from 'react-icons/fi'
import { VideoTraining } from './components/VideoTraining'

import marked from 'marked'

import styles from './styles.css'

const TrainingModule = () => {
  const [md, setMd] = useState('')
  const [id, setId] = useState('welcome')
  
  useEffect(() => {
    const fetchData = async () => {
      const path = 'https://api.github.com/repos/hennepin-tech/htc-content-lake/contents/plugins/training-module/training-module.md',
            res = await fetch(path),
            { content } = await res.json(),
            parsed = await atob(content),
            markdown = marked(parsed)
      setMd(markdown)
    }
    fetchData();
  }, [])  

    return (
      <div className={styles.container} >
        <TabList space={2}>
          <Tab
            aria-controls="welcome-panel"
            icon={FiSunrise}
            id="welcome-tab"
            label="Welcome"
            onClick={() => setId('welcome')}
            selected={id === 'welcome'}
            space={2}
          />
          <Tab
            aria-controls="video-panel"
            icon={FiVideo}
            id="video-tab"
            label="Video Training"
            onClick={() => setId('video')}
            selected={id === 'video'}
            space={2}
          />
        </TabList>
        <TabPanel
          aria-labelledby="welcome-tab"
          hidden={id !== 'welcome'}
          id="welcome-panel"
        >
          <div 
            dangerouslySetInnerHTML={{
              __html: md
            }}
          >
          </div>
        </TabPanel>

        <TabPanel
          aria-labelledby="video-tab"
          hidden={id !== 'video'}
          id="video-panel"
        >
          <VideoTraining namespace={'training-module'} playlistId={'PLIZgTJNRIxTPlwQsOCIzGqGv0EamYdJBo'} title={'training-module'}/>
        </TabPanel>
      </div>
    )
  }


export default {
  name: 'training-module',
  component: TrainingModule
}
