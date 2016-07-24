/* global describe, it */

var app = require('../app/index');
var request = require('supertest').agent(app.listen());

describe('GET /', function () {
  it('status code should be 200', function (done) {
    request
      .get('/')
      .expect(200, done);
  });
});

describe('GET user id from params', function () {
  it('should display "1024"', function (done) {
    request
      .get('/users/1024')
      .expect('1024', done);
  });
});
