import { Poly } from './Poly.js';

/**
 * Represents an SVG polyline.
 *
 * @extends {Poly}
 */
export class Polyline extends Poly {
  // Static

  /**
   * Create a Polyline instance with the provided coordinates.
   *
   * @param {number} x - The x-coordinate of the initial point.
   * @param {number} y - The y-coordinate of the initial point.
   */
  static from (x, y) {
    return new Polyline(x, y);
  }

  /**
   * Create a Polyline instance.
   *
   * @param {number} x - The x-coordinate of the initial point.
   * @param {number} y - The y-coordinate of the initial point.
   */
  constructor (x, y) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'polyline'));

    this.setX(x);
    this.setY(y);
    super.clear();
    this.setPoint(x, y);
  }

  // Accessors

  /**
   * Set the x-coordinate of the top-left corner.
   *
   * @param {number} x - The new x-coordinate.
   * @returns {Rect} The current Rect object.
   */
  setX (x) {
    super._set('x', x);

    return this;
  }

  getX () {
    return super._getAsNumber('x');
  }

  setY (y) {
    super._set('y', y);

    return this;
  }

  getY () {
    return super._getAsNumber('y');
  }

  // Methods

  /**
   * Create a deep copy of the current Polyline object.
   *
   * @override
   * @returns {Polyline} A new Polyline object with the same properties as the original.
   */
  clone () {
    return new Polyline();
  }

  /**
   * Check if this Polyline is colliding with another Polyline.
   *
   * @todo
   * @param {Polyline} other - The other Polyline instance to check for collision.
   * @returns {boolean} `true` if the Polylines are colliding, `false` otherwise.
   */
  isColliding (other) {}
}
