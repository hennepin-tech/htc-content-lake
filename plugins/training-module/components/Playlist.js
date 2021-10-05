import React from 'react'

import { Box, Card, Heading } from '@sanity/ui';

export const Playlist = ({ playlist }) => {
  return (
    playlist.items.map(({ id, snippet = {} }) => {
      const { title, thumbnails = {}, resourceId = {} } = snippet;
      const { medium } = thumbnails;
      return (
        <Card key={id} style={{
          boxShadow: '5px 5px 15px #00000025',
          borderRadius: '5px',
          width: 'max-content',
        }}>
          <Box
            padding={[3, 3, 4, 5]}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
          <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank">
            
              <img 
                width={medium.width} 
                height={medium.height} 
                src={medium.url} 
                alt={title} 
                style={{
                  marginBottom: '10px',
                  borderRadius: '5px'
                }}
              />
            
            <Heading 
              as={'h3'} 
              size={2}
              style={{
                maxWidth: medium.width - 10,
                wordWrap: 'break-word'
              }}
            >{ title }</Heading>
          </a>
          </Box>
        </Card>
      )
    })
  )
}
