import React from 'react'

import {Box, Button, Grid } from '@sanity/ui'

const contents = [
  {
    name: 'Marketing & Communications',
  }
]

export const TableofContents = () => {
  return (
    <Grid columns={[2, 3, 4, 6]} gap={[1, 1, 2, 3]} padding={4}>
      <Button />
    </Grid>
  )
}
