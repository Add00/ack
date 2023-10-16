import { Gradient } from './Gradient.js';

export class LinearGradient extends Gradient {
  constructor () {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient'));
  }

  setX1 (x1) {
    super._set('x1', x1);

    return this;
  }

  getX1 () {
    return super._getAsNumber('x1');
  }

  setX2 (x2) {
    super._set('x2', x2);

    return this;
  }

  getX2 () {
    return super._getAsNumber('x2');
  }

  setY1 (y1) {
    super._set('y1', y1);

    return this;
  }

  getY1 () {
    return super._getAsNumber('y1');
  }

  setY2 (y2) {
    super._set('y2', y2);

    return this;
  }

  getY2 () {
    return super._getAsNumber('y2');
  }
}
