import { Geometry } from './Geometry.js';

/**
 * An inheritable class for shapes positions from the center. For example, `Circle` or `Ellipse`.
 * This class is not intended to be used directly, but rather as a base class for other classes.
 *
 * @extends {Geometry}
 */
export class Conic extends Geometry {
  /**
   * Set the x-coordinate of the shape's center.
   *
   * @param {number} x - The x-coordinate of the center.
   * @returns {Conic} The current instance.
   */
  setX (x) {
    super._set('cx', x);

    return this;
  }

  /**
   * Get the x-coordinate of the shape's center.
   *
   * @returns {number} The x-coordinate of the center.
   */
  getX () {
    return super._getAsNumber('cx');
  }

  /**
   * Set the y-coordinate of the shape's center.
   *
   * @param {number} y - The y-coordinate of the center.
   * @returns {Conic} The current instance.
   */
  setY (y) {
    super._set('cy', y);

    return this;
  }

  /**
   * Get the y-coordinate of the shape's center.
   *
   * @returns {number} The y-coordinate of the center.
   */
  getY () {
    return super._getAsNumber('cy');
  }
}
