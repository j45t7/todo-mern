import React from 'react'
import './App.css'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TodoList from './components/TodoList'
import Header from './components/Header'
import NewTodo from './components/NewTodo'
import { makeStyles } from '@mui/styles'

//TODO:DArk mode
const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: '1rem',
    color: '#3D2C8D',
    fontWeight: 'bold',
  },
  container: {
    paddingBottom: '2rem',
  },
}))

function App() {
  const classes = useStyles()
  return (
    <>
      <Header />
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper
          elevation={6}
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
          }}
        >
          <Typography
            className={classes.title}
            component='h1'
            variant='h5'
            align='center'
          >
            Things to do today
          </Typography>
          <NewTodo />
        </Paper>
      </Container>
      <Container
        component='main'
        className={classes.container}
        maxWidth='sm'
        sx={{ mb: 4 }}
      >
        <Paper
          elevation={6}
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
          }}
        >
          <TodoList />
        </Paper>
      </Container>
    </>
  )
}

export default App
