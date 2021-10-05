import React, { useState, useEffect } from 'react'
import { 
  Box, 
  Button, 
  Card, 
  Container, 
  Flex, 
  Grid, 
  Heading,
  Text  
} from '@sanity/ui'
import { useSecrets, SettingsView } from 'sanity-secrets'
import { FiSettings } from 'react-icons/fi'

import userStore from 'part:@sanity/base/user'
import { YOUTUBE_PLAYLIST_ITEMS_API } from '../plugin.config'
import { fetchData } from '../../../utils/fetchData'
import { Playlist } from './Playlist'

import styles from '../styles.css'

export const VideoTraining = ({namespace, playlistId, title}) => {
    const pluginConfigKeys = [{
        key: 'apiKey',
        title
      }]
    
    const { secrets } = useSecrets(namespace)
    const [showSettings, setShowSettings] = useState(false)
    const [userRole, setUserRole] = useState('')
    const [playlist, setPlaylist] = useState({ items: [] })

  
  useEffect(() => {
    userStore.currentUser.subscribe(({user:{ role }}) => {
      setUserRole(role)
    })
    if(secrets){
      fetchData({
        endpoint: YOUTUBE_PLAYLIST_ITEMS_API({playlistId, secrets}),
        stateHook: setPlaylist
      });
    }
  }, [secrets])

  
    return ( 
    <>
    <Grid
      autoCols={'fr'}
      autoRows={'auto'}
      columns={2} 
      gap={[2, 2, 2, 3]}
      style={{
        gridTemplateAreas: `'title button' 'text text'`,
        marginTop: '2rem'
      }}
    >
      <Heading
        as={'h1'}
        size={4}
      >
        Training Area
      </Heading>
      {userRole === 'administrator' &&
        <div>
          <Button 
            aria-label='Settings'
            onClick={() => setShowSettings(true)}
            tone='primary'
            type="button"
            style={{
              display: 'block',
              marginLeft: 'auto',
              width: '40px',
              height: '40px'
            }}
          >
            <FiSettings 
              size={14}
              
            />
          </Button>
          
          {showSettings && (
            <SettingsView
              namespace={namespace}
              keys={pluginConfigKeys}
              onClose={() => {
                setShowSettings(false)
              }}
            />
          )} 
        </div>
      }
      <Text style={{ gridArea: 'text' }}>
        Here you can find training videos to help you navigate the Studio. 
        As always, if you have a feature request, question, or experience a 
        bug while using the studio, please email the <a href="mailto:jacob.stordahl@hennepintech.edu">Web Manager</a>.
      </Text>
    </Grid>
    <Container
      style={{
        maxWidth: 'unset',
        overflowX: 'scroll',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <Box 
        padding={[3, 3, 4, 5]}
        style={{
          minWidth: 'max-content',
          margin: '3rem auto',
          display: 'flex',
          flexWrap: 'nowrap',
          gap: '1.5rem',
        }}
      >
        {playlist && <Playlist playlist={playlist}/>}
      </Box>

    </Container>
    </>)
}