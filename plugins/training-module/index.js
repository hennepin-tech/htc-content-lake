import marked from 'marked'
import React, { useState, useEffect } from 'react'


import styles from './styles.css'

const TrainingModule = () => {
  const [md, setMd] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      const path = './README.md'
      const res = await fetch(path)
      await console.log(res)
      const markdown = marked(res.text())
      setMd(markdown)
    }
    fetchData();
  }, [])  

    return (
      <div className={styles.container}>
        {/* <header className={styles.header}>
          <h2 className={styles.title}>Welcome to Sanity!</h2>
        </header> */}
        { md }
      </div>
    )
  }


export default {
  name: 'training-module',
  component: TrainingModule
}
