import { Poly } from './Poly.js';

/**
 * Represents an SVG polyline.
 *
 * @extends {Poly}
 */
export class Polyline extends Poly {
  // Static

  /**
   * Create a Polyline instance with the provided points.
   *
   * @param {...DOMPoint} points - The DOMPoints to add to the Polyline.
   */
  static from (...points) {
    return new Polyline(...points);
  }

  /**
   * Create a Polyline instance.
   *
   * @param {...DOMPoint} points - The DOMPoints to add to the Polyline.
   */
  constructor (...points) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'polyline'));

    super.clear();
    super.addPoint(...points);
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

  /**
   * Create a deep copy of the current Polyline object.
   *
   * @override
   * @returns {Polyline} A new Polyline object with the same properties as the original.
   */
  clone () {
    return new Polyline(...super.getPoints());
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
