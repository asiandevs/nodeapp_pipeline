var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with From Australia', function(done) {
        request(app).get('/will').expect('{ "response": "Hello From Australia" }', done);
    });
});
