require('dotenv').config()
const express = require('express')
const todoRouter = require('./src/routes/todo.routes')
const bootstrap = require('./bootstrap')
const config = require('./config')

const PORT = config.port

const app = express()
app.use(express.json({}))

app.use('/todo', todoRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

bootstrap().then(
  () => {
    app.listen(PORT, () => {
      console.log(`app running on http://localhost:${PORT}`)
    })
  },
  (err) => {
    console.error(`Could not start the application, bootstrap failed, `, err)
    process.exit(1)
  }
)
