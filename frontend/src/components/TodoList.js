import React from 'react'
import Box from '@mui/material/Box'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)

  //TODO: Add message when no list
  return (
    <Box sx={{ width: '100%' }}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </Box>
  )
}

export default TodoList
