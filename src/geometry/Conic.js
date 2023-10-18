import { Geometry } from './Geometry.js';

export class Conic extends Geometry {
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
}
