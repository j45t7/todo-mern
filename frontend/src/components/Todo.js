import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { useDispatch } from 'react-redux'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import IconButton from '@mui/material/IconButton'
import { toggleTodoAsync, deleteTodo, editTodo } from '../store/todo-slice'

const useStyles = makeStyles((theme) => ({
  completed: {
    opacity: '0.6',
    textDecoration: 'line-through',
  },
  button: {
    background: '#3D2C8D',
    '&:hover': {
      backgroundColor: '#916BBF',
    },
  },
  input: {
    marginTop: '1rem',
  },
}))

const Todo = ({ id, text, completed }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(text)
  const classes = useStyles()

  const dispatch = useDispatch()

  const toggleCompleteHandler = () => {
    dispatch(
      toggleTodoAsync({
        id,
        completed: !completed,
      })
    )
  }

  const deleteHandler = () => {
    dispatch(deleteTodo({ id: id }))
  }

  const editHandler = () => {
    console.log('clicked')
    dispatch(editTodo({ id: id, text: editedTask }))
    setIsEditing(!isEditing)
  }

  const changeHandler = (event) => {
    setEditedTask(event.target.value)
  }

  return (
    <>
      {isEditing ? (
        <>
          <Box component='form' onSubmit={editHandler}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    id='todo'
                    name='text'
                    placeholder='What to do...'
                    fullWidth
                    variant='standard'
                    onChange={changeHandler}
                    value={editedTask}
                    className={classes.input}
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
                  Edit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <>
          <ListItem>
            <ListItemText
              primary={text}
              onClick={toggleCompleteHandler}
              className={`${completed && classes.completed}`}
            />
            <IconButton onClick={editHandler}>
              <CreateOutlinedIcon />
            </IconButton>
            <IconButton onClick={deleteHandler}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </>
      )}
    </>
  )
}

export default Todo
