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
    const spy = sinon.spy(Utils, 'calculateNumber')

    sendPaymentRequestToApi(100, 20)
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true
    spy.restore()
  })
})
