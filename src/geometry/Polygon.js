import { Poly } from './Poly.js';

/**
 * @extends {Poly}
 */
export class Polygon extends Poly {
  // Static

  static parse ({ x, y }) {
    return new Polygon(x, y);
  }

  static build (x, y) {
    return new Polygon(x, y);
  }

  constructor (x, y) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'polygon'));

    super.clear();
    this.setPoint(x, y);
  }
}
