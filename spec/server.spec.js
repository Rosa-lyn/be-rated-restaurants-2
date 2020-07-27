const request = require('supertest')
const app = require('../server')


describe('/api', () => {
    describe('/areas', () => {
        test('POST - area is added to the "areas_schema" table and sent back to the user', () => {
            return request(app).post('/api/areas')
            .send('Altrincham')
            .expect(201)
            .then((res) => {
                expect(res.body.area_name,)
            })
        })
    })
})
