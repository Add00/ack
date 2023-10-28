import { Geometry } from './Geometry.js';
import { Vector2 } from '../containers/vector/Vector2.js';

/**
 * Represents a rectangular shape.
 * @extends Geometry
 */
export class Rect extends Geometry {
  // Static

  /**
   * Parse an object into a Rect.
   * @param {Object} rect - An object with properties (x, y, width, height, rx, ry).
   * @returns {Rect} A new Rect object.
   */
  static parse ({ x, y, width, height, rx = 0, ry = 0 }) {
    return new Rect(x, y, width, height, rx, ry);
  }

  /**
   * Build a Rect object with specified properties.
   * @param {number} x - The x-coordinate of the top-left corner.
   * @param {number} y - The y-coordinate of the top-left corner.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @param {number} [rx=0] - The x-axis radius of the rectangle's corners.
   * @param {number} [ry=0] - The y-axis radius of the rectangle's corners.
   * @returns {Rect} A new Rect object.
   */
  static build (x, y, width, height, rx = 0, ry = 0) {
    return new Rect(x, y, width, height, rx, ry);
  }

  /**
   * Create a Rect object from position, size, and corner Vector2.
   * @param {Vector2} position - The position vector.
   * @param {Vector2} size - The size vector.
   * @param {Vector2} [corner=new Vector2(0, 0)] - The corner vector.
   * @returns {Rect} A new Rect object.
   */
  static buildFromVector2 (position, size, corner = new Vector2(0, 0)) {
    return new Rect(
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
   * @param {number} x - The x-coordinate of the top-left corner.
   * @param {number} y - The y-coordinate of the top-left corner.
   * @param {number} s - The side length of the square.
   * @returns {Rect} A new Rect object in the shape of a square.
   */
  static buildSquare (x, y, s) {
    return new Rect(x, y, s, s, 0, 0);
  }

  /**
   * Create a new Rect object.
   * @param {number} x - The x-coordinate of the top-left corner.
   * @param {number} y - The y-coordinate of the top-left corner.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @param {number} [rx=0] - The x-axis radius of the rectangle's corners.
   * @param {number} [ry=0] - The y-axis radius of the rectangle's corners.
   */
  constructor (x, y, width, height, rx = 0, ry = 0) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'rect'));

    this.setX(x);
    this.setY(y);
    this.setWidth(width);
    this.setHeight(height);
    this.setCornerRadiusX(rx);
    this.setCornerRadiusY(ry);
  }

  // Accessors

  /**
   * Set the x-coordinate of the top-left corner.
   * @param {number} x - The new x-coordinate.
   * @returns {Rect} The current Rect object.
   */
  setX (x) {
    super._set('x', x);

    return this;
  }

  /**
   * Get the x-coordinate of the top-left corner.
   * @returns {number} The x-coordinate.
   */
  getX () {
    return super._getAsNumber('x');
  }

  /**
   * Set the y-coordinate of the top-left corner.
   * @param {number} y - The new y-coordinate.
   * @returns {Rect} The current Rect object.
   */
  setY (y) {
    super._set('y', y);

    return this;
  }

  /**
   * Get the y-coordinate of the top-left corner.
   * @returns {number} The y-coordinate.
   */
  getY () {
    return super._getAsNumber('y');
  }

  /**
   * Set the width of the rectangle.
   * @param {number} width - The new width.
   * @returns {Rect} The current Rect object.
   */
  setWidth (width) {
    super._set('width', width);

    return this;
  }

  /**
   * Get the width of the rectangle.
   * @returns {number} The width.
   */
  getWidth () {
    return super._getAsNumber('width');
  }

  /**
   * Set the height of the rectangle.
   * @param {number} height - The new height.
   * @returns {Rect} The current Rect object.
   */
  setHeight (height) {
    super._set('height', height);

    return this;
  }

  /**
   * Get the height of the rectangle.
   * @returns {number} The height.
   */
  getHeight () {
    return super._getAsNumber('height');
  }

  /**
   * Set the x-axis radius of the rectangle's corners.
   * @param {number} rx - The new x-axis radius.
   * @returns {Rect} The current Rect object.
   */
  setCornerRadiusX (rx) {
    super._set('rx', rx);

    return this;
  }

  /**
   * Get the x-axis radius of the rectangle's corners.
   * @returns {number} The x-axis corner radius.
   */
  getCornerRadiusX () {
    return super._getAsNumber('rx');
  }

  /**
   * Set the y-axis radius of the rectangle's corners.
   * @param {number} ry - The new y-axis radius.
   * @returns {Rect} The current Rect object.
   */
  setCornerRadiusY (ry) {
    super._set('ry', ry);

    return this;
  }

  /**
   * Get the y-axis radius of the rectangle's corners.
   * @returns {number} The y-axis corner radius.
   */
  getCornerRadiusY () {
    return super._getAsNumber('ry');
  }

  /**
   * Set the size of the rectangle using a Vector2.
   * @param {Vector2} size - The new size as a Vector2.
   * @returns {Rect} The current Rect object.
   */
  setSize (size) {
    super._set('width', size.getX());
    super._set('height', size.getY());

    return this;
  }

  /**
   * Get the size of the rectangle as a Vector2.
   * @returns {Vector2} The size of the rectangle.
   */
  getSize () {
    return new Vector2(
      super._getAsNumber('width'),
      super._getAsNumber('height')
    );
  }

  /**
   * Set the position of the rectangle using a Vector2.
   * @param {Vector2} position - The new position as a Vector2.
   * @returns {Rect} The current Rect object.
   */
  setPosition (position) {
    super._set('x', position.getX());
    super._set('y', position.getY());

    return this;
  }

  /**
   * Get the position of the rectangle as a Vector2.
   * @returns {Vector2} The position of the rectangle.
   */
  getPosition () {
    return new Vector2(
      super._getAsNumber('x'),
      super._getAsNumber('y')
    );
  }

  // Methods

  /**
   * Create a deep copy of the current Rect object.
   * @override
   * @returns {Rect} A new Rect object with the same properties.
   */
  clone () {
    return new Rect(
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
   * @param {Rect} other - The other rectangle to check for collision.
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
