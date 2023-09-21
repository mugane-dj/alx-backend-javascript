// Test suite for express server
const chai = require('chai')
const request = require('request')

const expect = chai.expect
const PORT = 7865

const baseUrl = `http://localhost:${PORT}/`

describe('app', () => {
  it('should return "Welcome to the payment system" when GET /', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200)
      expect(body).to.be.equal('Welcome to the payment system')
      done()
    })
  })
})
