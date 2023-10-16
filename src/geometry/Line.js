import { Geometry } from './Geometry.js';

/**
 * @extends {Geometry}
 */
export class Line extends Geometry {
  // Static

  static build (x1, y1, x2, y2) {
    return new Line(x1, y1, x2, y2);
  }

  constructor (x1, y1, x2, y2) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'line'));

    this.setX1(x1);
    this.setY1(y1);
    this.setX2(x2);
    this.setY2(y2);
  }

  // Accessors

  setX1 (x) {
    super._set('x1', x);

    return this;
  }

  getX1 () {
    return super._get('x1');
  }

  setY1 (y) {
    super._set('y1', y);

    return this;
  }

  getY1 () {
    return super._get('y1');
  }

  setX2 (x2) {
    super._set('x2', x2);

    return this;
  }

  getX2 () {
    return super._getAsNumber('x2');
  }

  setY2 (y2) {
    super._set('y2', y2);

    return this;
  }

  getY2 () {
    return super._getAsNumber('y2');
  }
}
