import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'

import { addTodoAsync } from '../store/todo-slice'

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

const isNotValid = (value) => value.trim().length === 0

const NewTodo = () => {
  const classes = useStyles()
  const [isFormInvalid, setIsFormInvalid] = useState(false)
  const [enteredValue, setEnteredValue] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()

    if (isNotValid(enteredValue)) {
      setIsFormInvalid(true)
      return
    } else {
      setIsFormInvalid(false)
    }

    dispatch(
      addTodoAsync({
        text: enteredValue,
      })
    )

    console.log(enteredValue)
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
              id='text'
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
