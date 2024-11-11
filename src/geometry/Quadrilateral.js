/** @namespace geometry */

import { Geometry } from './Geometry.js';

/**
 * An inheritable class.
 *
 * @class
 * @extends {Geometry}
 */
export class Quadrilateral extends Geometry {
  /**
   * Set the x-coordinate of the top-left corner.
   *
   * @param {number} x - The new x-coordinate.
   * @returns {Rect} The current Rectangle object.
   */
  setX (x) {
    super._set('x', x);

    return this;
  }

  /**
   * Get the x-coordinate of the top-left corner.
   *
   * @returns {number} The x-coordinate.
   */
  getX () {
    return super._getAsNumber('x');
  }

  /**
   * Set the y-coordinate of the top-left corner.
   *
   * @param {number} y - The new y-coordinate.
   * @returns {Rect} The current Rectangle object.
   */
  setY (y) {
    super._set('y', y);

    return this;
  }

  /**
   * Get the y-coordinate of the top-left corner.
   *
   * @returns {number} The y-coordinate.
   */
  getY () {
    return super._getAsNumber('y');
  }

  /**
   * Set the width of the rectangle.
   *
   * @param {number} width - The new width.
   * @returns {Rect} The current Rectangle object.
   */
  setWidth (width) {
    super._set('width', width);

    return this;
  }

  /**
   * Get the width of the rectangle.
   *
   * @returns {number} The width.
   */
  getWidth () {
    return super._getAsNumber('width');
  }

  /**
   * Set the height of the rectangle.
   *
   * @param {number} height - The new height.
   * @returns {Rect} The current Rectangle object.
   */
  setHeight (height) {
    super._set('height', height);

    return this;
  }

  /**
   * Get the height of the rectangle.
   *
   * @returns {number} The height.
   */
  getHeight () {
    return super._getAsNumber('height');
  }
}
