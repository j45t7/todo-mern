import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
const NewTodo = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          id='todo'
          name='todo'
          label='What to do...'
          fullWidth
          variant='standard'
        />
      </Grid>
    </Grid>
  )
}

export default NewTodo
