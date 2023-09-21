// Test suite for express server
const request = require('request')
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct response when called', done => {
    request.get(`${baseUrl}/`, (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
    })
  })
})
