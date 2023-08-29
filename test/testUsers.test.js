const request = require('supertest');
const app = require('../src/app');

describe('GET /users', function () {
    it('get all users', function (done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('get a specific user', function (done) {
        request(app)
            .get('/users/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});