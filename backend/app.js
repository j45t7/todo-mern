const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

dotenv.config()

app.use(cors())

app.use(morgan('dev'))
// parse requests of content-type - application/json
// app.use(express.json())

//middle & static files
app.use(express.static('public'))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

//register view engine
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  let todos = [
    {
      id: 1,
      title: 'todo 1',
      completed: true,
    },
    {
      id: 2,
      title: 'todo 2',
      completed: false,
    },
    {
      id: 3,
      title: 'todo 3',
      completed: false,
    },
  ]
  res.render('index', { title: 'Todo', todos })
})

app.use((req,res) => {
  res.status(404).render('404', {title: '404'})
})
app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`)
})
