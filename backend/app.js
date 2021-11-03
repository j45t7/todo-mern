const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

const Todo = require('./models/todo')

const app = express()

dotenv.config()

mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('connected to db')
    app.listen(process.env.PORT, () => {
      console.log(`Listening at http://localhost:${process.env.PORT}`)
    })
  })
  .catch((err) => console.error(err))

app.use(cors())

app.use(morgan('dev'))
// parse requests of content-type - application/json
// app.use(express.json())

//middle & static files
app.use(express.static('public'))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

require('./routes/todo.routes')(app)
//register view engine
// app.set('view engine', 'ejs')
// app.get('/', (req, res) => {
//   let todos = [
//     {
//       id: 1,
//       title: 'todo 1',
//       completed: true,
//     },
//     {
//       id: 2,
//       title: 'todo 2',
//       completed: false,
//     },
//     {
//       id: 3,
//       title: 'todo 3',
//       completed: false,
//     },
//   ]
//   res.render('index', { title: 'Todo', todos })
// })

// app.get('/add-todo', (req, res) => {
//   const todo = new Todo({
//     todo: 'new todo 2',
//     completed: false,
//   })

//   todo
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// })

// app.get('/todos', (req, res) => {
//   Todo.find()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// })

// app.get('/todo', (req, res) => {
//   Todo.findById('6182256ff023c0240750d129')
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// })

// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' })
// })
