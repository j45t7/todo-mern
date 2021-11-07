import React, { useState, useMemo } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { useDispatch } from 'react-redux'

import { addTodo } from '../store/todo-slice'

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
  const [isFormInvalid, setIsFormInvalid] = useState(false)
  const [enteredValue, setEnteredValue] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(enteredValue)

    if (enteredValue.trim().length === 0) {
      setIsFormInvalid(true)
      return
    } else {
      setIsFormInvalid(false)
    }
    dispatch(
      addTodo({
        text: enteredValue,
      })
    )

    setEnteredValue('')
  }

  const changeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  return (
    <Box component='form' onSubmit={submitHandler}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              error={isFormInvalid}
              helperText={isFormInvalid && `Can't be empty`}
              id='todo'
              name='text'
              placeholder='What to do...'
              fullWidth
              variant='standard'
              onChange={changeHandler}
              value={enteredValue}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            type='submit'
            className={classes.button}
            variant='contained'
            fullWidth
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default NewTodo
