import { Gradient } from './Gradient.js';

/**
 * Represents a linear gradient for SVG elements.
 * @extends Gradient
 */
export class LinearGradient extends Gradient {
  /**
   * Create a new LinearGradient instance.
   * @param {number} x1 Set the x coordinate of the starting point of the gradient.
   * @param {number} y1 Set the y coordinate of the starting point of the gradient.
   * @param {number} x2 Set the x coordinate of the ending point of the gradient.
   * @param {number} y2 Set the y coordinate of the ending point of the gradient.
   */
  constructor (x1 = 0, y1 = 0, x2 = 1, y2 = 1) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient'));

    this.setX1(x1);
    this.setY1(y1);
    this.setX2(x2);
    this.setY2(y2);
  }

  /**
   * Set the x coordinate of the starting point of the gradient.
   * @param {number} x1 - The x1 coordinate.
   * @returns {LinearGradient} The current instance.
   */
  setX1 (x1) {
    super._set('x1', x1);

    return this;
  }

  /**
   * Get the x coordinate of the starting point of the gradient.
   * @returns {number} The x1 coordinate.
   */
  getX1 () {
    return super._getAsNumber('x1');
  }

  /**
   * Set the x coordinate of the ending point of the gradient.
   * @param {number} x2 - The x2 coordinate.
   * @returns {LinearGradient} The current instance.
   */
  setX2 (x2) {
    super._set('x2', x2);

    return this;
  }

  /**
   * Get the x coordinate of the ending point of the gradient.
   * @returns {number} The x2 coordinate.
   */
  getX2 () {
    return super._getAsNumber('x2');
  }

  /**
   * Set the y coordinate of the starting point of the gradient.
   * @param {number} y1 - The y1 coordinate.
   * @returns {LinearGradient} The current instance.
   */
  setY1 (y1) {
    super._set('y1', y1);

    return this;
  }

  /**
   * Get the y coordinate of the starting point of the gradient.
   * @returns {number} The y1 coordinate.
   */
  getY1 () {
    return super._getAsNumber('y1');
  }

  /**
   * Set the y coordinate of the ending point of the gradient.
   * @param {number} y2 - The y2 coordinate.
   * @returns {LinearGradient} The current instance.
   */
  setY2 (y2) {
    super._set('y2', y2);

    return this;
  }

  /**
   * Get the y coordinate of the ending point of the gradient.
   * @returns {number} The y2 coordinate.
   */
  getY2 () {
    return super._getAsNumber('y2');
  }
}
