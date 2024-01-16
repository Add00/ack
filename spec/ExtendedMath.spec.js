/* global describe, it , expect, beforeEach */
import { ExtendedMath } from '../import/general.js';

describe('ExtendedMath', function () {
  let result;

  beforeEach(() => {
    result = null;
  });

  describe('degreeToRadian', function () {
    it('should convert 90 degrees to π/2 radians', function () {
      result = ExtendedMath.degreeToRadian(90);
      expect(result).toBeCloseTo(Math.PI / 2, 3);
    });

    it('should convert 180 degrees to π radians', function () {
      result = ExtendedMath.degreeToRadian(180);
      expect(result).toBeCloseTo(Math.PI, 3);
    });

    it('should convert 0 degrees to 0 radians', function () {
      result = ExtendedMath.degreeToRadian(0);
      expect(result).toBe(0);
    });
  });

  describe('radianToDegree', function () {
    it('should convert π/2 radians to 90 degrees', function () {
      result = ExtendedMath.radianToDegree(Math.PI / 2);
      expect(result).toBe(90);
    });

    it('should convert π radians to 180 degrees', function () {
      result = ExtendedMath.radianToDegree(Math.PI);
      expect(result).toBe(180);
    });

    it('should convert 0 radians to 0 degrees', function () {
      result = ExtendedMath.radianToDegree(0);
      expect(result).toBe(0);
    });
  });

  describe('cartesianToPolar', function () {
    it('should convert (1, 1) to polar coordinates (sqrt(2), π/4 radians)', function () {
      result = ExtendedMath.cartesianToPolar(1, 1);
      expect(result.r).toBeCloseTo(Math.sqrt(2), 3);
      expect(result.angle).toBeCloseTo(Math.PI / 4, 3);
    });

    it('should convert (0, 0) to polar coordinates (0, 0 radians)', function () {
      result = ExtendedMath.cartesianToPolar(0, 0);
      expect(result.r).toBe(0);
      expect(result.angle).toBe(0);
    });
  });
});
