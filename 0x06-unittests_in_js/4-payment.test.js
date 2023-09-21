/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// Tests for sendPaymentRequestToApi function
const chai = require('chai')
const sinon = require('sinon')
const Utils = require('./utils.js')
const sendPaymentRequestToApi = require('./3-payment.js')
const expect = chai.expect

describe('sendPaymentRequestToApi', () => {
  it('correctly returns shipping total', () => {
    const calculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10)
    const consoleSpy = sinon.spy(console, 'log')

    sendPaymentRequestToApi(100, 20)
    expect(calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true
    consoleSpy.restore()
  })
})
