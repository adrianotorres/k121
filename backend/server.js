const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const bodyParser = require('body-parser')
const httpStatus = require('http-status')
const routes = require('./route')
const APIError = require('./helpers/APIError')

const app = express()

app.use(methodOverride())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

app.use((err, _req, _res, next) => {
    if (!(err instanceof APIError)) {
        const apiError = new APIError(err.message, err.status, err.errors)
        return next(apiError)
    }
    return next(err)
})

app.use((err, _req, res, _next) =>
    res.status(err.status).json({
        message: err.message,
        stack: process.env.ENV === 'development' ? err.stack : {},
        errors: err.errors,
        status: httpStatus[err.status],
        statusCode: err.status
    })
)

module.exports = app
