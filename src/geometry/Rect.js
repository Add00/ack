import { Geometry } from './Geometry.js';
import { Vector2 } from '../containers/vector/Vector2.js';

/**
 * Represents a rectangular shape.
 * @extends Geometry
 */
export class Rect extends Geometry {
  // Static

  static build (x, y, width, height, rx = 0, ry = 0) {
    return new Rect(x, y, width, height, rx, ry);
  }

  static buildBox (rect) {
    return new Rect(rect.x, rect.y, rect.width, rect.height);
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

  setX (x) {
    super._set('x', x);

    return this;
  }

  getX () {
    return super._get('x');
  }

  setY (y) {
    super._set('y', y);

    return this;
  }

  getY () {
    return super._get('y');
  }

  /**
     * Set the width of the rectangle.
     * @param {number} width - The width to set.
     * @returns {Rect} The current Rect object for method chaining.
     */
  setWidth (width) {
    super._set('width', width);

    return this;
  }

  /**
     * Get the width of the rectangle.
     * @returns {number} The width of the rectangle.
     */
  getWidth () {
    return super._getAsNumber('width');
  }

  /**
     * Set the height of the rectangle.
     * @param {number} height - The height to set.
     * @returns {Rect} The current Rect object for method chaining.
     */
  setHeight (height) {
    super._set('height', height);

    return this;
  }

  /**
     * Get the height of the rectangle.
     * @returns {number} The height of the rectangle.
     */
  getHeight () {
    return super._getAsNumber('height');
  }

  /**
     * Set the x-axis radius of the rectangle's corners.
     * @param {number} rx - The x-axis radius to set.
     * @returns {Rect} The current Rect object for method chaining.
     */
  setCornerRadiusX (rx) {
    super._set('rx', rx);

    return this;
  }

  /**
     * Get the x-axis radius of the rectangle's corners.
     * @returns {number} The x-axis radius of the rectangle's corners.
     */
  getCornerRadiusX () {
    return super._getAsNumber('rx');
  }

  /**
     * Set the y-axis radius of the rectangle's corners.
     * @param {number} ry - The y-axis radius to set.
     * @returns {Rect} The current Rect object for method chaining.
     */
  setCornerRadiusY (ry) {
    super._set('ry', ry);

    return this;
  }

  /**
     * Get the y-axis radius of the rectangle's corners.
     * @returns {number} The y-axis radius of the rectangle's corners.
     */
  getCornerRadiusY () {
    return super._getAsNumber('ry');
  }

  setSize (size) {
    super._set('width', size.getX());
    super._set('height', size.getY());

    return this;
  }

  getSize () {
    return new Vector2(
      super._getAsNumber('width'),
      super._getAsNumber('height')
    );
  }

  /**
     * Set the position of the rectangle using a Vector2.
     * @param {Vector2} position - The new position of the rectangle.
     * @returns {Rectangle} This rectangle.
     */
  setPosition (position) {
    super._set('x', position.getX());
    super._set('y', position.getY());

    return this;
  }

  /**
     * Get the position of the rectangle using a Vector2.
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
     * Check if this rectangle is in collision with another rectangle.
     * @param {Rect} other - The other rectangle to check collision with.
     * @returns {boolean} True if there is a collision, otherwise false.
     */
  isColliding (other) {
    if (
      super.getX() < other.getX() + other.getWidth() &&
            super.getX() + super.getWidth() > other.getX() &&
            super.getY() < other.getY() + other.getHeight() &&
            super.getY() + super.getHeight() > other.getY()
    ) {
      return true;
    }

    return false;
  }
}
