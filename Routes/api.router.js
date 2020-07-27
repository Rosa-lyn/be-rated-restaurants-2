const express = require('express')
const areaRouter = require('./areas.router')

const apiRouter = express.Router()

apiRouter.use('/areas', areaRouter)

module.exports = apiRouter