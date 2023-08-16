var request = require('supertest');
var app = require('../app.js');
describe('GET /will', function() {
    it('respond with From Australia', function(done) {
        request(app).get('/will').expect('{ "response": "Hello World" }', done);
    });
});
