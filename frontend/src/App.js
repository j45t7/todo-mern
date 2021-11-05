import logo from './logo.svg'
import './App.css'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Box from '@mui/material/Box'
import NewTodo from './components/NewTodo'
function App() {
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
          <Typography component='h1' variant='h4' align='center'>
            Things to do today
          </Typography>
          <NewTodo />
        </Paper>
      </Container>
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
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
