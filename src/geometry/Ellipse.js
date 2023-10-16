import { Conic } from './Conic.js';
import { Vector2 } from '../containers/vector/Vector2.js';

/**
 * Ellipse class that extends the Conic class.
 * @extends {Conic}
 */
export class Ellipse extends Conic {
  // Static

  /**
     * Create an Ellipse object.
     * @param {number} x - The x-coordinate of the center of the ellipse.
     * @param {number} y - The y-coordinate of the center of the ellipse.
     * @param {number} rx - The horizontal radius of the ellipse.
     * @param {number} ry - The vertical radius of the ellipse.
     */
  static build (x, y, rx, ry) {
    return new Ellipse(x, y, rx, ry);
  }

  static buildFromVector2 (position, radius) {
    return new Ellipse(
      position.getX(),
      position.getY(),
      radius.getX(),
      radius.getY()
    );
  }

  /**
     * Create an Ellipse object.
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
     * @param {number} rx - The horizontal radius of the ellipse.
     * @returns {Ellipse} The Ellipse object.
     */
  setRadiusX (rx) {
    super._set('rx', rx);

    return this;
  }

  /**
     * Get the horizontal radius of the ellipse.
     * @returns {number} The horizontal radius of the ellipse.
     */
  getRadiusX () {
    return super._getAsNumber('rx');
  }

  /**
     * Set the vertical radius of the ellipse.
     * @param {number} ry - The vertical radius of the ellipse.
     * @returns {Ellipse} The Ellipse object.
     */
  setRadiusY (ry) {
    super._set('ry', ry);

    return this;
  }

  /**
     * Get the vertical radius of the ellipse.
     * @returns {number} The vertical radius of the ellipse.
     */
  getRadiusY () {
    return super._getAsNumber('ry');
  }

  // Methods

  isColliding (other) {

  }
}
