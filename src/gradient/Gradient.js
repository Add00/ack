import { Element } from '../Element.js';

export class Gradient extends Element {
  constructor (element) {
    super(element);
  }

  setHref (href) {
    super._set('href', href);

    return this;
  }

  getHref () {
    return super._getAsString('href');
  }

  setGradientUnits (units) {
    super._set('gradientUnits', units);

    return this;
  }

  getGradientUnits () {
    return super._getAsString('gradientUnits');
  }

  getGradientTransform () {
    return super._getAsString('gradientTransform');
  }

  setGradientTransform (transform) {
    super._set('gradientTransform', transform);

    return this;
  }

  getSpreadMethod () {
    return super._getAsString('spreadMethod');
  }

  setSpreadMethod (method) {
    super._set('spreadMethod', method);

    return this;
  }
}
