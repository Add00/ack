import { TextContent } from './TextContent.js';

export class TextPositioning extends TextContent {
  constructor (element, fontStyle) {
    super(element, fontStyle);
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
