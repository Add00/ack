import { Geometry } from './Geometry.js';

/**
 * @extends {Geometry}
 */
export class Poly extends Geometry {
  /**
     * Create a new Poly instance.
     * @constructor
     * @param {Geometry} shape - .
     */
  constructor (shape) {
    super(shape);
  }

  // Accessors

  /**
     * Add a point to the polygon's points attribute.
     * @param {number} x - The X-coordinate of the point to add.
     * @param {number} y - The Y-coordinate of the point to add.
     * @returns {Poly} - The current Poly instance for method chaining.
     */
  setPoint (x, y) {
    const points = this.getPoints() + `${x},${y} `;
    super._set('points', points);

    return this;
  }

  /**
     * Get the points attribute of the polygon.
     * @returns {string} - The points in comma seperated pairs, and pairs seperated by spaces.
     */
  getPoints () {
    return super._get('points');
  }

  /**
     * Clear all points from the polygon by resetting the points attribute to an empty string.
     * @returns {Poly} - The current Poly instance for method chaining.
     */
  clear () {
    super._set('points', '');

    return this;
  }
}
