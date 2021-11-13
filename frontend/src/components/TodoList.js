import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Todo from './Todo'
import { useSelector, useDispatch } from 'react-redux'
import { getTodosAsync } from '../store/todo-slice'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodosAsync())
  }, [dispatch])

  //TODO: Add message when no list
  return (
    <Box sx={{ width: '100%' }}>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          id={todo._id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </Box>
  )
}

export default TodoList
