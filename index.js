require('dotenv').config();

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const server = require('./backend/server')

const mongoUri = process.env.MONGO_HOST
mongoose.connect(mongoUri, {
  keepAlive: 1,
  useNewUrlParser: true
})
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

server.use(express.static(path.join(__dirname, './frontend/dist')))

server.listen(process.env.API_PORT, () => {
  console.info(`server started on port ${process.env.API_PORT} (${process.env.ENV})`) //eslint-disable-line
})

module.exports = server
