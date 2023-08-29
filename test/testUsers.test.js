const request = require('supertest');
const app = require('../src/app');
let userId = 0;

beforeAll(async () => {
    const response = await request(app)
        .post('/users')
        .set('Accept', 'application/json')
        .send({ name: 'john' })

    // expect(response.headers["Content-Type"]).toMatch(/json/);
    expect(response.status).toEqual(201);
    userId = response.body.id;
})

describe('GET /users', function () {

    it('get all users', function (done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('get a specific user', function () {
        request(app)
            .get('/users/'+userId)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.name).toEqual('john')
            })            
    });

 
});