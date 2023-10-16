import { Poly } from './Poly.js';

/**
 * @extends {Poly}
 */
export class Polygon extends Poly {
  // Static

  static build (x, y) {
    return new Polygon(x, y);
  }

  static buildFromPolygon (other) {
    const temp = new Polygon(-1, -1);

    temp.clear();
    temp.#setPoints(other.getPoints());
  }

  #setPoints (points) {
    super._set('points', points);

    return this;
  }

  constructor (x, y) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'polygon'));

    super.clear();
    this.setPoint(x, y);
  }
}
