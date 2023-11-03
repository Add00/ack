import { Poly } from './Poly.js';

/**
 * Represents an SVG polyline.
 * @extends {Poly}
 */
export class Polyline extends Poly {
  // Static

  /**
   * Parse an object into a Polyline.
   * @param {Object} rect - An object with properties (x, y).
   * @returns {Rect} A new Rect object.
   */
  static parse ({ x, y }) {
    return new Polyline(x, y);
  }

  static build (x, y) {
    return new Polyline(x, y);
  }

  constructor (x, y) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'polyline'));

    this.setX(x);
    this.setY(y);
    super.clear();
    this.setPoint(x, y);
  }

  // Accessors

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

  clone () {
    return new Polyline();
  }
}
