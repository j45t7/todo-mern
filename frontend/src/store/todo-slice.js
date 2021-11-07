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
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
