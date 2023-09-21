// Test suite for express server
const app = require('./api.js')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect

describe('GET /', () => {
  it('should return "Welcome to the payment system" when called', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.be.equal(200)
        expect(res.text).to.be.equal('Welcome to the payment system')
        done()
      })
  })
})
