/**
 * Represents a mathematical utility class.
 *
 * @class
 */
export class ExtendedMath {
  // Constants

  /**
   * Represents Tau (τ), which is equal to 2π (approximately 6.283185307179586).
   * Tau is often used to represent one full circle in radians, providing a more intuitive
   * way to work with angles in many applications.
   * @type {number}
   */
  static TAU = 2 * Math.PI;

  /**
   * Represents the Golden Ratio (φ), which is approximately 1.618033988749895.
   * The Golden Ratio is a mathematical constant often found in art, architecture, and nature.
   * @type {number}
   */
  static PHI = (1 + Math.sqrt(5)) / 2;

  /**
   * Represents the Golden Ratio (φ), also an alias of ExtendedMath.PHI.
   * @type {number}
   */
  static GOLDEN_RATIO = ExtendedMath.PHI;

  /**
   * Represents a small constant used for numerical precision in comparisons and calculations.
   * @type {number}
   */
  static EPSILON = 0.000001;

  /**
   * Represents the square root of 3 (√3), which is approximately 1.7320508075688772.
   * @type {number}
   */
  static SQRT3 = Math.sqrt(3);

  // Conversions

  /**
   * Converts degrees to radians.
   * @param {number} angle - The angle in degrees.
   * @returns {number} The equivalent angle in radians.
   */
  static degreeToRadian (angle) {
    return angle * (Math.PI / 180);
  }

  /**
   * Converts radians to degrees.
   * @param {number} angle - The angle in radians.
   * @returns {number} The equivalent angle in degrees.
   */
  static radianToDegree (angle) {
    return angle / (Math.PI / 180);
  }

  /**
   * Converts Cartesian coordinates to polar coordinates.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {{ r: number, angle: number }} The polar coordinates (r, angle in radians).
   */
  static cartesianToPolar (x, y) {
    const r = Math.hypot(x, y);
    const angle = Math.atan2(y, x);

    return { r, angle };
  }

  /**
   * Converts polar coordinates to Cartesian coordinates.
   * @param {number} r - The radial distance.
   * @param {number} angle - The angle in radians.
   * @returns {{ x: number, y: number }} The Cartesian coordinates (x, y).
   */
  static polarToCartesian (r, angle) {
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);

    return { x, y };
  }

  // Trigonometric

  /**
   * Calculates the secant of an angle.
   * @param {number} angle - The angle in radians.
   * @returns {number} The secant of the angle.
   */
  static sec (angle) {
    return 1 / Math.cos(angle);
  }

  /**
   * Calculates the cosecant of an angle.
   * @param {number} angle - The angle in radians.
   * @returns {number} The cosecant of the angle.
   */
  static csc (angle) {
    return 1 / Math.sin(angle);
  }

  /**
   * Calculates the cotangent of an angle.
   * @param {number} angle - The angle in radians.
   * @returns {number} The cotangent of the angle.
   */
  static cot (angle) {
    return 1 / Math.tan(angle);
  }

  /**
   * Calculates the arcsecant of a value.
   * @param {number} value - The value, which must be in the range (-1, 1).
   * @returns {number} The arcsecant of the value in radians, or -1 if the value is out of range.
   */
  static arcsec (value) {
    if (value <= -1 || value >= 1) {
      return -1;
    }

    return Math.acos(1 / value);
  }

  /**
   * Calculates the arccosecant of a value.
   * @param {number} value - The value, which must be in the range (-1, 1).
   * @returns {number} The arccosecant of the value in radians, or -1 if the value is out of range.
   */
  static arccsc (value) {
    if (value <= -1 || value >= 1) {
      return -1;
    }

    return Math.asin(1 / value);
  }

  /**
   * Calculates the arccotangent of a value.
   * @param {number} value - The value.
   * @returns {number} The arccotangent of the value in radians.
   */
  static arccot (value) {
    return Math.atan(1 / value);
  }

  /**
   * Checks if a number is prime.
   *
   * @param {number} n - The number to check.
   * @returns {boolean} True if `n` is a prime number, false otherwise.
   */
  static isPrime (n) {
    if (n <= 1) {
      return false; // 0 and 1 are not prime
    }

    if (n <= 3) {
      return true; // 2 and 3 are prime
    }

    if (n % 2 === 0 || n % 3 === 0) {
      return false; // Numbers divisible by 2 or 3 are not prime
    }

    // Check divisibility for numbers of the form 6k ± 1 up to the square root of n
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  }

  // Other

  /**
   * Compares two numbers within a specified tolerance.
   * @param {number} x - The first number to compare.
   * @param {number} y - The second number to compare.
   * @param {number} epsilon - The tolerance for the comparison.
   * @returns {boolean} True if the numbers are within the specified tolerance, false otherwise.
   */
  static epsilonCompare (x, y, epsilon = ExtendedMath.EPSILON) {
    const absX = Math.abs(x);
    const absY = Math.abs(y);
    const maxAbs = Math.max(absX, absY, 1); // Ensure at least 1 to avoid division by zero.

    return Math.abs(x - y) <= epsilon * maxAbs;
  }

  /**
   * Clamps a value between a minimum and maximum.
   * @param {number} value - The value to clamp.
   * @param {number} min - The minimum allowable value.
   * @param {number} max - The maximum allowable value.
   * @returns {number} The clamped value.
   */
  static clamp (value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  /**
   * Linearly interpolates between two values.
   * @param {number} value - The interpolation factor (usually between 0 and 1).
   * @param {number} start - The start value.
   * @param {number} end - The end value.
   * @returns {number} The interpolated value.
   */
  static lerp (value, start, end) {
    const t = ExtendedMath.clamp(value, 0, 1);

    return start * (1 - t) + end * t;
  }

  /**
   * Remaps a value from one range to another.
   * @param {number} value - The value to remap.
   * @param {number} fromLow - The lower bound of the source range.
   * @param {number} fromHigh - The upper bound of the source range.
   * @param {number} toLow - The lower bound of the target range.
   * @param {number} toHigh - The upper bound of the target range.
   * @returns {number} The remapped value.
   */
  static remap (value, fromLow, fromHigh, toLow, toHigh) {
    const clampedValue = ExtendedMath.clamp(value, fromLow, fromHigh);
    const ratio = (clampedValue - fromLow) / (fromHigh - fromLow);

    return toLow + ratio * (toHigh - toLow);
  }

  /**
   * Generates a random integer between min and max (inclusive).
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {number} A random integer.
   */
  static random (min, max) {
    return min + Math.random() * (max - min);
  }

  /**
   * Checks if a value is within a specified range.
   * @param {number} value - The value to check.
   * @param {number} min - The minimum value of the range (inclusive).
   * @param {number} max - The maximum value of the range (inclusive).
   * @returns {boolean} True if the value is within the range, false otherwise.
   */
  static isWithinRange (value, min, max) {
    return value >= min && value <= max;
  }
}
