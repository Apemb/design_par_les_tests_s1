const point = require('../src/point')
const { expect } = require('./test-helper')


describe('Point', () => {
  describe('happy path', () => {
    it('should be like I want it', () => {
      // ARRANGE
      const arg = true

      // ACT
      const result = point.aFunctionThatReturnsArgs(arg)

      // ASSERT
      expect(result).to.be.false
    })
  })
})
