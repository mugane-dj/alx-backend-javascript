/* eslint-disable no-undef */
// Test suite for getPaymentTokenFromAPI
const chai = require('chai')
const getPaymentTokenFromAPI = require('./6-payment_token.js')

const expect = chai.expect

describe('getPaymentTokenFromAPI', () => {
  it('resolves promise correctly', () => {
    getPaymentTokenFromAPI(true, () => {
      expect().to.equal({ data: 'Successful response from the API' })
      done()
    })
  })
})
