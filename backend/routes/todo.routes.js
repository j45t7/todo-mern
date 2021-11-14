module.exports = (app) => {
  const todo = require('../controllers/todo.controller')

  var router = require('express').Router()

  // Create a new todo
  router.post('/new-todo', todo.create)

  // Retrieve all todos
  router.get('/', todo.findAll)

  // Update a todo with id
  router.put('/todo-completed/:id', todo.updateComplete)

  // Update a todo with id
  router.put('/todo-edited/:id', todo.updateEdit)

  // Delete a Tutorial with id
  router.delete('/:id', todo.delete)

  // Delete all
  // router.delete('/', todo.deleteAll)

  app.use('/todos', router)
}
