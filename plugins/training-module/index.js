import marked from 'marked'
import React, { useState, useEffect } from 'react'


import styles from './styles.css'

const TrainingModule = () => {
  const [md, setMd] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      const path = 'https://api.github.com/repos/hennepin-tech/htc-content-lake/contents/plugins/training-module/training-module.md'
      const res = await fetch(path)
      const { content } = await res.json()
      const parsed = await atob(content)
      console.log(parsed)
      const markdown = marked(parsed)
      setMd(markdown)
    }
    fetchData();
  }, [])  

    return (
      <div 
        className={styles.container} 
        dangerouslySetInnerHTML={{
          __html: md
        }}
      >
      </div>
    )
  }


export default {
  name: 'training-module',
  component: TrainingModule
}
