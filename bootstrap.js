const mongoose = require('mongoose')
const config = require('./config')
// start prerequisite services e.g database, cache, etc.
module.exports = async function bootstrap() {
  try {
    await mongoose.connect(config.mongoConnUrl)
  } catch (error) {
    console.error(`Error connecting to mongo db`)
    return Promise.reject(error)
  }
}
