const { Router } = require('express')
const { saveTodo, getAllTodos, getTodoByID, deleteByID, updateTodo } = require('../controllers/todo.controller')

const router = Router()

router.post('/', async (req, res) => {
  const details = req.body
  const result = await saveTodo(details)
  result.pipe(res, 201)
})

router.get('/', async (_, res) => {
  const result = await getAllTodos()
  result.pipe(res)
})

router.get('/:id', async (req, res) => {
  const result = await getTodoByID(req.params.id)
  result.pipe(res)
})

router.put('/:id', async (req, res) => {
  const result = await updateTodo(req.params.id, req.body)
  result.pipe(res)
})

router.delete('/:id', async (req, res) => {
  const result = await deleteByID(req.params.id)
  result.pipe(res)
})
module.exports = router
