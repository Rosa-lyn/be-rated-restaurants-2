const {Client} = require('pg')

const config = {
    host: 'localhost',
    database: 'rated_restaurants',
    port: 5432,
}

const client = new Client(config)

client
    .connect()
    .then(()=>{
        console.log( `connected to ${config.database} on port ${config.port}`)
    })
    .catch((err)=>{
        console.log('connection error', err)
    })

module.exports = {client}