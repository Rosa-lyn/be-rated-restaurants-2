const express = require('express')
const apiRouter = require('./Routes/api.router')
const app = express()

app.listen (9090, () => {
    console.log('App server is running')
})

app.use('/api', apiRouter)

module.exports = app