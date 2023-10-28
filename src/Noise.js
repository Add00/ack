import { module } from './noisejs/perlin.js';

/**
 * An interface for receiving noise values build on `noise.js` by Stefan Gustavson.
 */
export class Noise {
  /**
   * Set the seed for the Noise module.
   * @param {number} seed - The seed value to set.
   * @returns {void}
   */
  static seed (seed) {
    return module.seed(seed);
  }

  /**
   * Generate 2D simplex noise.
   * @param {number} xin - The x-coordinate.
   * @param {number} yin - The y-coordinate.
   * @returns {number} - The generated simplex noise value.
   */
  static simplex2 (xin, yin) {
    return module.simplex2(xin, yin);
  }

  /**
   * Generate 3D simplex noise.
   * @param {number} xin - The x-coordinate.
   * @param {number} yin - The y-coordinate.
   * @param {number} zin - The z-coordinate.
   * @returns {number} - The generated simplex noise value.
   */
  static simplex3 (xin, yin, zin) {
    return module.simplex2(xin, yin, zin);
  }

  /**
   * Generate 2D Perlin noise.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {number} - The generated Perlin noise value.
   */
  static perlin2 (x, y) {
    return module.perlin2(x, y);
  }

  /**
   * Generate 3D Perlin noise.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @param {number} z - The z-coordinate.
   * @returns {number} - The generated Perlin noise value.
   */
  static perlin3 (x, y, z) {
    return module.perlin3(x, y, z);
  }
}
