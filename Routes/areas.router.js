const express = require('express')
const {getAreas} = require('../controllers/areas.controller')

const areaRouter = express.Router()

areaRouter.get('/', () => {
    console.log('area router is running')
    getAreas()
})

module.exports = areaRouter