import { Geometry } from './Geometry.js';

/**
 * An inheritable class.
 *
 * @extends {Geometry}
 */
export class Poly extends Geometry {
  // Accessors

  /**
   * Add a point to the polygon.
   *
   * @param {number} x - The x-coordinate of the point to add.
   * @param {number} y - The y-coordinate of the point to add.
   * @returns {Poly} - The current instance.
   */
  setPoint (x, y) {
    const points = this.getPoints() + `${x},${y} `;
    super._set('points', points);

    return this;
  }

  /**
   * Get all the points on the Polygon.
   *
   * @returns {string} - The points in comma separated pairs, and pairs separated by spaces.
   */
  getPoints () {
    return super._get('points');
  }

  /**
   * Clear all points from the polygon.
   *
   * @returns {Poly} - The current instance.
   */
  clear () {
    super._set('points', '');

    return this;
  }
}
