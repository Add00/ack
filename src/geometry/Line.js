import { Geometry } from './Geometry.js';

/**
 * A straight line between two points.
 *
 * @extends {Geometry}
 */
export class Line extends Geometry {
  // Static

  /**
   * Create a Line instance with the provided coordinates.
   *
   * @param {number} x1 - The x-coordinate of the starting point.
   * @param {number} y1 - The y-coordinate of the starting point.
   * @param {number} x2 - The x-coordinate of the ending point.
   * @param {number} y2 - The y-coordinate of the ending point.
   * @returns {Line} A new Line instance.
   */
  static from (x1, y1, x2, y2) {
    return new Line(x1, y1, x2, y2);
  }

  /**
   * Create a Line instance.
   *
   * @param {number} x1 - The x-coordinate of the starting point.
   * @param {number} y1 - The y-coordinate of the starting point.
   * @param {number} x2 - The x-coordinate of the ending point.
   * @param {number} y2 - The y-coordinate of the ending point.
   */
  constructor (x1, y1, x2, y2) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'line'));

    this.setX1(x1);
    this.setY1(y1);
    this.setX2(x2);
    this.setY2(y2);
  }

  // Accessors

  /**
   * Set the x-coordinate of the starting point.
   *
   * @param {number} x - The x-coordinate.
   * @returns {Line} The current instance.
   */
  setX1 (x) {
    super._set('x1', x);

    return this;
  }

  /**
   * Gets the x-coordinate of the starting point.
   *
   * @returns {number} The x-coordinate of the starting point.
   */
  getX1 () {
    return super._get('x1');
  }

  /**
   * Sets the y-coordinate of the starting point.
   *
   * @param {number} y - The y-coordinate.
   * @returns {Line} The current instance.
   */
  setY1 (y) {
    super._set('y1', y);

    return this;
  }

  /**
   * Gets the y-coordinate of the starting point.
   *
   * @returns {number} The y-coordinate of the starting point.
   */
  getY1 () {
    return super._get('y1');
  }

  /**
   * Sets the x-coordinate of the ending point.
   *
   * @param {number} x2 - The x-coordinate.
   * @returns {Line} The current instance.
   */
  setX2 (x2) {
    super._set('x2', x2);

    return this;
  }

  /**
   * Gets the x-coordinate of the ending point.
   *
   * @returns {number} The x-coordinate of the ending point.
   */
  getX2 () {
    return super._getAsNumber('x2');
  }

  /**
   * Sets the y-coordinate of the ending point.
   *
   * @param {number} y2 - The y-coordinate.
   * @returns {Line} The current instance.
   */
  setY2 (y2) {
    super._set('y2', y2);

    return this;
  }

  /**
   * Gets the y-coordinate of the ending point.
   *
   * @returns {number} The y-coordinate of the ending point.
   */
  getY2 () {
    return super._getAsNumber('y2');
  }

  // Methods

  /**
   * Create a deep copy of the current Line object.
   *
   * @override
   * @returns {Line} A new Line object with the same properties as the original.
   */
  clone () {
    return new Line(this.getX1(), this.getY1(), this.getX2(), this.getY2());
  }

  /**
   * Check if this Line is colliding with another Line.
   *
   * @todo
   * @param {Line} other - The other Line instance to check for collision.
   * @returns {boolean} `true` if the circles are colliding, `false` otherwise.
   */
  isColliding (other) {}
}
