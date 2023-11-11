import { Conic } from './Conic.js';
import { Vector2 } from '../containers/vector/Vector2.js';

/**
 * A Conic shape where points on the perimeter are not an equal distance to the center.
 *
 * @extends {Conic}
 */
export class Ellipse extends Conic {
  // Static

  /**
   * Create an Ellipse object.
   *
   * @param {number} x - The x-coordinate of the center of the ellipse.
   * @param {number} y - The y-coordinate of the center of the ellipse.
   * @param {number} rx - The horizontal radius of the ellipse.
   * @param {number} ry - The vertical radius of the ellipse.
   */
  static from (x, y, rx, ry) {
    return new Ellipse(x, y, rx, ry);
  }

  /**
   * Create an Ellipse object from Vector2.
   *
   * @param {Vector2} position
   * @param {Vector2} radius
   * @returns {Ellipse} The created Ellipse.
   */
  static fromVector2 (position, radius) {
    return new Ellipse(
      position.getX(),
      position.getY(),
      radius.getX(),
      radius.getY()
    );
  }

  /**
   * Create an Ellipse object.
   *
   * @param {number} x - The x-coordinate of the center of the ellipse.
   * @param {number} y - The y-coordinate of the center of the ellipse.
   * @param {number} rx - The horizontal radius of the ellipse.
   * @param {number} ry - The vertical radius of the ellipse.
   */
  constructor (x, y, rx, ry) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'ellipse'));

    super.setX(x);
    super.setY(y);
    this.setRadiusX(rx);
    this.setRadiusY(ry);
  }

  // Accessors

  /**
   * Set the horizontal radius of the ellipse.
   *
   * @param {number} rx - The horizontal radius of the ellipse.
   * @returns {Ellipse} The Ellipse object.
   */
  setRadiusX (rx) {
    super._set('rx', rx);

    return this;
  }

  /**
   * Get the horizontal radius of the ellipse.
   *
   * @returns {number} The horizontal radius of the ellipse.
   */
  getRadiusX () {
    return super._getAsNumber('rx');
  }

  /**
   * Set the vertical radius of the ellipse.
   *
   * @param {number} ry - The vertical radius of the ellipse.
   * @returns {Ellipse} The Ellipse object.
   */
  setRadiusY (ry) {
    super._set('ry', ry);

    return this;
  }

  /**
   * Get the vertical radius of the ellipse.
   *
   * @returns {number} The vertical radius of the ellipse.
   */
  getRadiusY () {
    return super._getAsNumber('ry');
  }

  // Methods

  /**
   * Check if this ellipse is colliding with another ellipse.
   *
   * @override
   * @param {*} other - The other Ellipse object to check for collision.
   * @returns {boolean} `true` if the ellipses are colliding, `false` otherwise.
   */
  isColliding (other) {
    // Calculate the distance between the centers of the two ellipses
    const dx = this.getX() - other.getX();
    const dy = this.getY() - other.getY();

    // Calculate the sum of the radii along the major and minor axes
    const radiusSumX = this.getRadiusX() + other.getRadiusX();
    const radiusSumY = this.getRadiusY() + other.getRadiusY();

    // Check if the distance between the centers is less than the sum of the radii
    return (dx * dx) / (radiusSumX * radiusSumX) + (dy * dy) / (radiusSumY * radiusSumY) <= 1;
  }
}
