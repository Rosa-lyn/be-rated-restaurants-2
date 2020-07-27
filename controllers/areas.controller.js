const {fetchAreas} = require('../models/areas.model')

const getAreas = () => {
    console.log('you are in get areas')
    fetchAreas()
}

module.exports = {getAreas}