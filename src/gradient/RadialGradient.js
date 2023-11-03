import { Gradient } from './Gradient.js';

export class RadialGradient extends Gradient {
  /**
   * Creates a new RadialGradient element.
   *
   * @param {number} [x=0.5] - The x-coordinate of the gradient's center.
   * @param {number} [y=0.5] - The y-coordinate of the gradient's center.
   * @param {number} [r=0.5] - The radius of the gradient.
   * @param {number} [fx=x] - The x-coordinate of the gradient's focus point.
   * @param {number} [fy=y] - The y-coordinate of the gradient's focus point.
   * @param {number} [fr=r] - The radius of the gradient's focus point.
   */
  constructor (x = 0.5, y = 0.5, r = 0.5, fx = x, fy = y, fr = r) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient'));

    this.setX(x);
    this.setY(y);
    this.setRadius(r);
    this.setFocusX(fx);
    this.setFocusY(fy);
    this.setFocusRadius(fr);
  }

  /**
   * Set the x-coordinate of the gradient's center.
   *
   * @param {number} x - The x-coordinate value.
   * @returns {RadialGradient} The current instance.
   */
  setX (x) {
    super._set('cx', x);

    return this;
  }

  /**
   * Get the x-coordinate of the gradient's center.
   *
   * @returns {number} The x-coordinate value.
   */
  getX () {
    return super._getAsNumber('cx');
  }

  /**
   * Set the y-coordinate of the gradient's center.
   *
   * @param {number} y - The y-coordinate value.
   * @returns {RadialGradient} The current instance.
   */
  setY (y) {
    super._set('cy', y);

    return this;
  }

  /**
   * Get the y-coordinate of the gradient's center.
   *
   * @returns {number} The y-coordinate value.
   */
  getY () {
    return super._getAsNumber('cy');
  }

  /**
   * Set the radius of the gradient.
   *
   * @param {number} r - The radius value.
   * @returns {RadialGradient} The current instance.
   */
  setRadius (r) {
    super._set('r', r);

    return this;
  }

  /**
   * Get the radius of the gradient.
   *
   * @returns {number} The radius value.
   */
  getRadius () {
    return super._getAsNumber('r');
  }

  /**
   * Set the x-coordinate of the gradient's focus point.
   *
   * @param {number} fx - The x-coordinate value.
   * @returns {RadialGradient} The current instance.
   */
  setFocusX (x) {
    super._set('fx', x);

    return this;
  }

  /**
   * Get the x-coordinate of the gradient's focus point.
   *
   * @returns {number} The x-coordinate value.
   */
  getFocusX () {
    return super._getAsNumber('fx');
  }

  /**
   * Set the y-coordinate of the gradient's focus point.
   *
   * @param {number} fy - The y-coordinate value.
   * @returns {RadialGradient} The current instance.
   */
  setFocusY (y) {
    super._set('fy', y);

    return this;
  }

  /**
   * Get the y-coordinate of the gradient's focus point.
   *
   * @returns {number} The y-coordinate value.
   */
  getFocusY () {
    return super._getAsNumber('fy');
  }

  /**
   * Set the radius of the gradient's focus point.
   *
   * @param {number} fr - The radius value.
   * @returns {RadialGradient} The current instance.
   */
  setFocusRadius (r) {
    super._set('fr', r);

    return this;
  }

  /**
   * Get the radius of the gradient's focus point.
   *
   * @returns {number} The radius value.
   */
  getFocusRadius () {
    return super._getAsNumber('fr');
  }
}
