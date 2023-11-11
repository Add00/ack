import { Poly } from './Poly.js';

/**
 * A Polygon.
 *
 * @extends {Poly}
 */
export class Polygon extends Poly {
  // Static

  // static parse ({ x, y }) {
  //   return new Polygon(x, y);
  // }

  /**
   * Create a Polygon instance with the provided coordinates.
   *
   * @param {number} x - The x-coordinate of the initial point.
   * @param {number} y - The y-coordinate of the initial point.
   */
  static from (x, y) {
    return new Polygon(x, y);
  }

  /**
   * Create a Polygon instance.
   *
   * @param {number} x - The x-coordinate of the initial point.
   * @param {number} y - The y-coordinate of the initial point.
   */
  constructor (x, y) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'polygon'));

    super.clear();
    this.setPoint(x, y);
  }

  // Methods

  /**
   * Create a deep copy of the current Polygon object.
   *
   * @override
   * @returns {Polygon} A new Polygon object with the same properties as the original.
   */
  clone () {
    return new Polygon();
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
