import { Poly } from './Poly.js';

/**
 * @extends {Poly}
 */
export class Polyline extends Poly {
  // Static

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
    return super._get('x');
  }

  setY (y) {
    super._set('y', y);

    return this;
  }

  getY () {
    return super._get('y');
  }
}
