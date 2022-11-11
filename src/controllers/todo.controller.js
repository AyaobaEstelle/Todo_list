const Todo = require('../models/todo.model')

exports.saveTodo = async (properties) => {
  return await Todo.save(properties)
}

exports.updateTodo = async (id, properties) => {
  return await Todo.update(id, properties)
}
exports.getAllTodos = async () => {
  return await Todo.get()
}

exports.getTodoByID = async (id) => {
  return await Todo.get(id)
}

exports.deleteByID = async (id) => {
  return await Todo.delete(id)
}
