import { Point } from "../src/point.ts";
import { expect } from "chai";

describe('Point', () => {
  describe('test', () => {
    it('returns "test"', () => {
      // ARRANGE
      const point = new Point()

      // ACT
      const result = point.test()

      // ASSERT
      expect(result).to.equal("test")
    })
  })
})
