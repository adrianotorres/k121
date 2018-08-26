const mongoose = require('mongoose')
const server = require('./backend/server')
const config = require('./config')

const mongoUri = config.mongo.host
mongoose.connect(mongoUri, {
  keepAlive: 1,
  useNewUrlParser: true
})
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

server.listen(config.api_port, () => {
  console.info(`server started on port ${config.api_port} (${config.env})`) //eslint-disable-line
})

module.exports = server
