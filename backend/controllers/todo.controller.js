const Todo = require('../models/todo')
const { v4: uuidv4 } = require('uuid')
// Create and Save a new todo
exports.create = async (req, res) => {
  try {
    const { text } = req.body
    console.log(text)
    let todo = new Todo({
      id: uuidv4(),
      text: text,
      completed: false,
    })

    todo = await todo.save()
    res.send(todo)
  } catch (error) {
    console.log(error.message)
    res.status(400).send({ message: 'Content can not be empty!' })
  }
}

// Retrieve all todos from the database.
exports.findAll = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.send(todos)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(`Error: ${error.message}`)
  }
}

// Update a todo by the id in the request
exports.update = async (req, res) => {
  const { id } = req.params
  const { completed } = req.body
  try {
    const todo = await Todo.findById(id)
    if (!todo) return res.status(404).send(`Todo not found...`)
    todo.completed = completed
    todo.save()
    res.send(todo)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(`Error: ${error.message}`)
  }
}

// // Delete a todo with the specified id in the request
// exports.delete = (req, res) => {}

// // Delete all todos from the database.
// exports.deleteAll = (req, res) => {}
