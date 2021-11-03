const Todo = require('../models/todo')

// Create and Save a new todo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.todo) {
    res.status(400).send({ message: 'Content can not be empty!' })
    return
  }

  const todo = new Todo({
    todo: 'new todo 2',
    completed: false,
  })

  todo
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
}

// Retrieve all todos from the database.
exports.findAll = (req, res) => {
  Todo.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
}

// Find a single todo with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  Todo.findById(id)
    //  Todo.findById('6182256ff023c0240750d129')
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
}

// // Update a todo by the id in the request
// exports.update = (req, res) => {}

// // Delete a todo with the specified id in the request
// exports.delete = (req, res) => {}

// // Delete all todos from the database.
// exports.deleteAll = (req, res) => {}
