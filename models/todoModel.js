const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  task: {
    type: String,
    required: [true, 'A Todo must have a task'],
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo