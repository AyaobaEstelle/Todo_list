require('dotenv').config()

module.exports = {
  mongoConnUrl: process.env.MONGO_DB_CONN_STRING,
  port: process.env.PORT || 5678,
}
