import { TextContent } from './TextContent.js';

export class TextPositioning extends TextContent {
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

  setShiftX (dx) {
    super._set('dx', dx);

    return this;
  }

  getShiftX () {
    return super._getAsNumber('dx');
  }

  setShiftY (dy) {
    super._set('dy', dy);

    return this;
  }

  getShiftY () {
    return super._getAsNumber('dy');
  }

  setRotation (rotate) {
    super._set('rotate', rotate);

    return this;
  }

  getRotation () {
    return super._getAsNumber('rotate');
  }
}
