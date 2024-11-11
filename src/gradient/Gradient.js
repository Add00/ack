/** @namespace gradient */

import { Element } from '../Element.js';

/**
 * Represents a gradient element for SVG elements.
 *
 * @extends Element
 */
export class Gradient extends Element {
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

  setGradientTransform (transform) {
    super._set('gradientTransform', transform);

    return this;
  }

  getGradientTransform () {
    return super._getAsString('gradientTransform');
  }

  /**
   * Sets the spread method for a gradient.
   *
   * @param {'pad' | 'reflect' | 'repeat'} method the new method that will be used.
   * @returns {Gradient} the current instance.
   */
  setSpreadMethod (method) {
    super._set('spreadMethod', method);

    return this;
  }

  /**
   * Get s the spread method for the gradient.
   *
   * @returns {'pad' | 'reflect' | 'repeat'} the current spread method.
   */
  getSpreadMethod () {
    return super._getAsString('spreadMethod');
  }
}
