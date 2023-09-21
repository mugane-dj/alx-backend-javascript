/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// Tests for sendPaymentRequestToApi function
const chai = require('chai')
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment.js')
const expect = chai.expect

describe('sendPaymentRequestToApi', () => {
  let consoleSpy

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log')
  })

  it('correctly returns shipping total 1', () => {
    sendPaymentRequestToApi(100, 20)
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true
  })
  it('correctly returns shipping total 2', () => {
    sendPaymentRequestToApi(10, 10)
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true
  })

  afterEach(() => {
    consoleSpy.restore()
  })
})
