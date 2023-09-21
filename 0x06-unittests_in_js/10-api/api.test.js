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
    });
  });

  it('should return correct status code when id is a number', done => {
    request.get(`${baseUrl}/cart/82`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 82');
      done();
    });
  });

  it('should return correct status code when id is not a number', done => {
    request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('should return correct response when called', done => {
    request.post(`${baseUrl}/login`, {json: {userName: 'Betty'}}, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });

  it('should return correct obj response when called', done => {
    request.get(`${baseUrl}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});