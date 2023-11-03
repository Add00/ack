import { Gradient } from './Gradient.js';

export class RadialGradient extends Gradient {
  constructor (x, y, r, fx = x, fy = y) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient'));

    this.setX(x);
    this.setY(y);
    this.setFocusX(fx);
    this.setFocusY(fy);
  }

  setX (x) {
    super._set('cx', x);

    return this;
  }

  getX () {
    return super._getAsNumber('cx');
  }

  setY (y) {
    super._set('cy', y);

    return this;
  }

  getY () {
    return super._getAsNumber('cy');
  }

  setRadius (r) {
    super._set('r', r);

    return this;
  }

  getRadius () {
    return super._getAsNumber('r');
  }

  setFocusX (x) {
    super._set('fx', x);

    return this;
  }

  getFocusX () {
    return super._getAsNumber('fx');
  }

  setFocusY (y) {
    super._set('fy', y);

    return this;
  }

  getFocusY () {
    return super._getAsNumber('fy');
  }
}
