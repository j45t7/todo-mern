import React from 'react'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: '1rem',
  },
  button: {
    background: '#3D2C8D',
    '&:hover': {
      backgroundColor: '#916BBF',
    },
  },
}))

const NewTodo = () => {
  const classes = useStyles()

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Input
            id='todo'
            name='todo'
            placeholder='What to do...'
            fullWidth
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.button} variant='contained' fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default NewTodo
