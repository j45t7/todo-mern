import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const response = await fetch('http://localhost:5000/todos')
    if (response.ok) {
      const todos = await response.json()
      return { todos }
    }
  }
)

export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/todos/new-todo',
        payload
      )
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const toggleTodoAsync = createAsyncThunk(
  'todos/toggleTodoAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const { id, completed } = payload
      const response = await axios.put(
        `http://localhost:5000/todos/todo-completed/${id}`,
        {
          completed,
        }
      )
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteTodoAsync = createAsyncThunk(
  'todos/deleteTodoAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const { id } = payload
      const response = await axios.delete(`http://localhost:5000/todos/${id}`)
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const editTodoAsync = createAsyncThunk(
  'todos/editTodoAsync',
  async (payload, { rejectWithValue }) => {
    try {
      const { id, text } = payload
      const response = await axios.put(
        `http://localhost:5000/todos/todo-edited/${id}`,
        {
          text,
        }
      )
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // addTodo: (state, action) => {
    //   const newTodo = {
    //     id: uuidv4(),
    //     text: action.payload.text,
    //     completed: false,
    //   }
    //   console.log(newTodo)
    //   state.push(newTodo)
    // },
    // toggleComplete: (state, action) => {
    //   const index = state.findIndex((todo) => todo.id === action.payload.id)
    //   state[index].completed = action.payload.completed
    // },
    // deleteTodo: (state, action) => {
    //   return state.filter((todo) => todo.id !== action.payload.id)
    // },
    // editTodo: (state, action) => {
    //   const index = state.findIndex((todo) => todo.id === action.payload.id)
    //   state[index].text = action.payload.text
    // },
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      console.log('Fetching data')
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log('Fetched data...')
      return action.payload.todos
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload)
    },
    [toggleTodoAsync.fulfilled]: (state, action) => {
      return state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      )
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo._id !== action.payload._id)
    },
    [editTodoAsync.fulfilled]: (state, action) => {
      return state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      )
    },
  },
})

// export const { addTodo, toggleComplete, deleteTodo, editTodo } =
//   todoSlice.actions

export default todoSlice.reducer
