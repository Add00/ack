import { Quadrilateral } from './Quadrilateral.js';
import { Vector2 } from '../containers/vector/Vector2.js';

/**
 * Represents a rectangular shape.
 *
 * @extends {Geometry}
 */
export class Rectangle extends Quadrilateral {
  // Static

  /**
   * Parse an object into a Rect.
   *
   * @param {Object} Rectangle- An object with properties (x, y, width, height, rx, ry).
   * @returns {Rectangle} A new Rectangle .
   */
  static parse ({ x, y, width, height, rx = 0, ry = 0 }) {
    return new Rectangle(x, y, width, height, rx, ry);
  }

  /**
   * Build a Rectangle  with specified properties.
   *
   * @param {number} x - The x-coordinate of the top-left corner.
   * @param {number} y - The y-coordinate of the top-left corner.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @param {number} [rx=0] - The x-axis radius of the rectangle's corners.
   * @param {number} [ry=0] - The y-axis radius of the rectangle's corners.
   * @returns {Rectangle} A new Rectangle .
   */
  static from (x, y, width, height, rx = 0, ry = 0) {
    return new Rectangle(x, y, width, height, rx, ry);
  }

  /**
   * Create a Rectangle  from position, size, and corner Vector2.
   *
   * @param {Vector2} position - The position vector.
   * @param {Vector2} size - The size vector.
   * @param {Vector2} [corner=new Vector2(0, 0)] - The corner vector.
   * @returns {Rectangle} A new Rectangle .
   */
  static fromVector2 (position, size, corner = new Vector2(0, 0)) {
    return new Rectangle(
      position.getX(),
      position.getY(),
      size.getX(),
      size.getY(),
      corner.getX(),
      corner.getY()
    );
  }

  /**
   * Build a square.
   *
   * @param {number} x - The x-coordinate of the top-left corner.
   * @param {number} y - The y-coordinate of the top-left corner.
   * @param {number} s - The side length of the square.
   * @returns {Rectangle} A new Rectangle  in the shape of a square.
   */
  static fromSquare (x, y, s) {
    return new Rectangle(x, y, s, s, 0, 0);
  }

  /**
   * Create a new Rectangle .
   *
   * @param {number} x - The x-coordinate of the top-left corner.
   * @param {number} y - The y-coordinate of the top-left corner.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @param {number} [rx=0] - The x-axis radius of the rectangle's corners.
   * @param {number} [ry=0] - The y-axis radius of the rectangle's corners.
   */
  constructor (x, y, width, height, rx = 0, ry = 0) {
    super('rect');

    super.setX(x);
    super.setY(y);
    super.setWidth(width);
    super.setHeight(height);
    this.setCornerRadiusX(rx);
    this.setCornerRadiusY(ry);
  }

  // Accessors

  /**
   * Set the x-axis radius of the rectangle's corners.
   *
   * @param {number} rx - The new x-axis radius.
   * @returns {Rectangle} The current Rectangle .
   */
  setCornerRadiusX (rx) {
    super._set('rx', rx);

    return this;
  }

  /**
   * Get the x-axis radius of the rectangle's corners.
   *
   * @returns {number} The x-axis corner radius.
   */
  getCornerRadiusX () {
    return super._getAsNumber('rx');
  }

  /**
   * Set the y-axis radius of the rectangle's corners.
   *
   * @param {number} ry - The new y-axis radius.
   * @returns {Rectangle} The current Rectangle .
   */
  setCornerRadiusY (ry) {
    super._set('ry', ry);

    return this;
  }

  /**
   * Get the y-axis radius of the rectangle's corners.
   *
   * @returns {number} The y-axis corner radius.
   */
  getCornerRadiusY () {
    return super._getAsNumber('ry');
  }

  /**
   * Set the size of the rectangle using a Vector2.
   *
   * @param {Vector2} size - The new size as a Vector2.
   * @returns {Rectangle} The current Rectangle .
   */
  setSize (size) {
    super.setWidth(size.getX());
    super.setHeight(size.getY());

    return this;
  }

  /**
   * Get the size of the rectangle as a Vector2.
   *
   * @returns {Vector2} The size of the rectangle.
   */
  getSize () {
    return new Vector2(
      super.getWidth(),
      super.getHeight()
    );
  }

  /**
   * Set the position of the rectangle using a Vector2.
   *
   * @param {Vector2} position - The new position as a Vector2.
   * @returns {Rectangle} The current Rectangle .
   */
  setPosition (position) {
    super.setX(position.getX());
    super.setY(position.getY());

    return this;
  }

  /**
   * Get the position of the rectangle as a Vector2.
   *
   * @returns {Vector2} The position of the rectangle.
   */
  getPosition () {
    return new Vector2(
      super.getX(),
      super.getY()
    );
  }

  // Methods

  /**
   * Create a deep copy of the current Rectangle .
   *
   * @override
   * @returns {Rectangle} A new Rectangle  with the same properties.
   */
  clone () {
    return new Rectangle(
      this.getX(),
      this.getY(),
      this.getWidth(),
      this.getHeight(),
      this.getCornerRadiusX(),
      this.getCornerRadiusY()
    );
  }

  /**
   * Check if this rectangle is in collision with another rectangle.
   *
   * @param {Rectangle} other - The other rectangle to check for collision.
   * @returns {boolean} True if there is a collision, otherwise false.
   */
  isColliding (other) {
    if (
      this.getX() < other.getX() + other.getWidth() &&
      this.getX() + this.getWidth() > other.getX() &&
      this.getY() < other.getY() + other.getHeight() &&
      this.getY() + this.getHeight() > other.getY()
    ) {
      return true;
    }

    return false;
  }
}
