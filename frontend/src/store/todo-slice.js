import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, text: 'todo1', completed: false },
    { id: 2, text: 'todo2', completed: false },
    { id: 3, text: 'todo2', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        text: action.payload.text,
        completed: false,
      }
      state.push(newTodo)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
    editTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].text = action.payload.text
    },
  },
})

export const { addTodo, toggleComplete, deleteTodo, editTodo } =
  todoSlice.actions

export default todoSlice.reducer
