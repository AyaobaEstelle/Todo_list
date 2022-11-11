const { success, failure } = require('../../helpers')
const Todo = require('./todo.schema')
let index = 0
const db = new Map()

exports.save = async (data) => {
  try {
    const res = await Todo.create(data)
    return success(res.toJSON())
  } catch (error) {
    return failure(error.message)
  }
}

exports.get = async (id) => {
  if (id) {
    try {
      const todo = await Todo.findById(id).orFail()
      return success(todo)
    } catch (error) {
      return failure(error)
    }
  } else {
    const todos = await Todo.find({})
    console.log(todos)
    return success(todos)
  }
}

exports.delete = async (id) => {
  try {
    await Todo.deleteOne({ id }).orFail()
    return success()
  } catch (error) {
    return failure(error)
  }
}
exports.update = async (id, update) => {
  try {
    const current = await Todo.findOneAndUpdate({ id }, update).orFail()
    return success({ ...current.toJSON(), ...update })
  } catch (error) {
    return failure(error)
  }
}
