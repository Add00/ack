/** @namespace geometry */

import { Conic } from './Conic.js';

/**
 * A basic shape in which every point on the perimeter of the shape is an equal distance to it center.
 *
 * @extends {Geometry}
 */
export class Circle extends Conic {
  // Static

  /**
   * Create a Circle instance with the provided coordinates and radius.
   *
   * @param {number} x - The x coordinate of the center of the circle.
   * @param {number} y - The y coordinate of the center of the circle.
   * @param {number} r - The radius of the circle.
   * @returns {Circle} The created Circle instance.
   */
  static from (x, y, r) {
    return new Circle(x, y, r);
  }

  /**
   * Create a Circle instance from a Vector3 object.
   *
   * @param {Vector3} vector - The Vector3 object containing the x, y, and z coordinates.
   * @returns {Circle} The created Circle instance.
   */
  static fromVector3 (vector) {
    return new Circle(
      vector.getX(),
      vector.getY(),
      vector.getZ()
    );
  }

  /**
   * Create a Circle instance with the provided coordinates and diameter.
   *
   * @param {number} x - The x-coordinate of the center of the circle.
   * @param {number} y - The y-coordinate of the center of the circle.
   * @param {number} d - The diameter of the circle.
   * @returns {Circle} The created Circle instance.
   */
  static fromDiameter (x, y, d) {
    return new Circle(x, y, d / 2);
  }

  /**
   * Create a Circle instance.
   *
   * @constructor Circle
   * @param {number} x - The x-coordinate of the center of the circle.
   * @param {number} y - The y-coordinate of the center of the circle.
   * @param {number} r - The radius of the circle.
   */
  constructor (x, y, r) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'circle'));

    super.setX(x);
    super.setY(y);
    this.setRadius(r);
  }

  // Accessors

  /**
   * Set the radius of the circle.
   *
   * @param {number} r - The new radius of the circle.
   * @returns {Circle} The current instance.
   */
  setRadius (r) {
    super._set('r', r);

    return this;
  }

  /**
   * Get the radius of the circle.
   *
   * @returns {number} The radius of the circle.
   */
  getRadius () {
    return super._getAsNumber('r');
  }

  // Methods

  /**
   * Create a deep copy of the current Circle object.
   *
   * @override
   * @returns {Circle} A new Circle object with the same properties as the original.
   */
  clone () {
    return new Circle(this.getX(), this.getY(), this.getRadius());
  }

  /**
   * Check if this circle is colliding with another circle.
   *
   * @param {Circle} other - The other Circle instance to check for collision.
   * @returns {boolean} `true` if the circles are colliding, `false` otherwise.
   */
  isColliding (other) {
    const dx = this.getX() - other.getX();
    const dy = this.getY() - other.getY();
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < this.getRadius() + other.getRadius();
  }
}
