import { Poly } from './Poly.js';

/**
 * A Polygon.
 *
 * @extends {Poly}
 */
export class Polygon extends Poly {
  // Static

  /**
   * Create a Polygon instance with the provided points.
   *
   * @param {...DOMPoint} points - The DOMPoints to add to the polygon.
   */
  static from (...points) {
    return new Polygon(...points);
  }

  /**
   * Create a Polygon instance.
   *
   * @param {...DOMPoint} points - The DOMPoints to add to the polygon.
   */
  constructor (...points) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'polygon'));

    super.clear();
    this.addPoint(...points);
  }

  // Methods

  /**
   * Create a deep copy of the current Polygon object.
   *
   * @override
   * @returns {Polygon} A new Polygon object with the same properties as the original.
   */
  clone () {
    return new Polygon(...super.getPoints());
  }

  /**
   * Check if this Polygon is colliding with another Polygon.
   *
   * @todo
   * @param {Polygon} other - The other Polygon instance to check for collision.
   * @returns {boolean} `true` if the Polygons are colliding, `false` otherwise.
   */
  isColliding (other) {}
}
