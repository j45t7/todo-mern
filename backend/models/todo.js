const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema(
  {
    text: { type: String, reqired: true },
    completed: { type: Boolean, reqired: true },
  },
  { timestamps: true }
)
const Todo = mongoose.model('Todo', TodoSchema)
module.exports = Todo
