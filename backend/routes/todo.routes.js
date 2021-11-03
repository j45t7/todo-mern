module.exports = (app) => {
  const todo = require('../controllers/todo.controller')

  var router = require('express').Router()

  // Create a new todo
  router.post('/new-todo', todo.create)

  // Retrieve all todos
  router.get('/todos', todo.findAll)

  // Retrieve a single todo with id
  router.get('/:id', todo.findOne)

  // // Update a todo with id
  // router.put('/:id', todo.update)

  // // Delete a Tutorial with id
  // router.delete('/:id', todo.delete)

  // // Create a new todo
  // router.delete('/', todo.deleteAll)

  app.use('/api/todolist', router)
}
