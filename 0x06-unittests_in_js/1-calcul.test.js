/* eslint-disable no-undef */
// Tests for calculateNumber
const assert = require('assert')
const calculateNumber = require('./1-calcul.js')

describe('CalculateNumber()', () => {
  const tests = [
    { args: ['SUM', 1.4, 4.5], expected: 6 },
    { args: ['SUBTRACT', 1.4, 4.5], expected: -4 },
    { args: ['DIVIDE', 1.4, 4.5], expected: 0.2 },
    { args: ['DIVIDE', 1.4, 0], expected: 'Error' }
  ]

  tests.forEach((test) => {
    it('correctly ' + test.args[0] + 'S ' + test.args[1] + ' and ' + test.args[2], () => {
      const res = calculateNumber.apply(null, test.args)
      assert.equal(res, test.expected)
    })
  })
})
