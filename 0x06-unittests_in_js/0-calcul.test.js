/* eslint-disable no-undef */
// Tests for calculateNumber
const assert = require('assert')
const calculateNumber = require('./0-calcul.js')

describe('CalculateNumber()', () => {
  const tests = [
    { args: [1, 3], expected: 4 },
    { args: [1, 3.7], expected: 5 },
    { args: [1.2, 3.7], expected: 5 },
    { args: [1.5, 3.7], expected: 6 }
  ]

  tests.forEach((test) => {
    it('correctly adds ' + test.args[0] + ' and ' + test.args[1], () => {
      const res = calculateNumber.apply(null, test.args)
      assert.equal(res, test.expected)
    })
  })
})
