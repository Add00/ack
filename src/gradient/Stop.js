/** @namespace gradient */

import { Element } from '../Element.js';

/**
 * A stop defines a color and its position to use on a gradient.
 * This element is always a child of a `linearGradient` or `radialGradient` element.
 *
 * @extends Element
 */
export class Stop extends Element {
  /**
   * Creates a new Stop element.
   *
   * @constructor Stop
   * @param {number} - How far along the gradient the stop should be positioned.
   * @param {string} - The color of the gradient at this stop.
   * @param {number} - The opacity of the stop.
   */
  constructor (offset = 0, color = 'black', opacity = 1) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'stop'));

    this.setOffset(offset);
    this.setColor(color);
    this.setOpacity(opacity);
  }

  /**
   * Set the offset of the stop along the gradient.
   *
   * @param {number} offset - The offset value.
   * @returns {Stop} The current instance.
   */
  setOffset (offset) {
    super._set('offset', offset);

    return this;
  }

  /**
   * Get the offset of the stop.
   *
   * @returns {number} The offset value.
   */
  getOffset () {
    return super._getAsNumber('offset');
  }

  /**
   * Set the color of the stop.
   *
   * @param {string} color - The color value.
   * @returns {Stop} The current instance.
   */
  setColor (color) {
    super._set('stop-color', color);

    return this;
  }

  /**
   * Get the color of the stop.
   *
   * @returns {string} The color value.
   */
  getColor () {
    return super._getAsString('stop-color');
  }

  /**
   * Set the opacity of the stop.
   *
   * @param {number} opacity - The opacity value.
   * @returns {Stop} The current instance.
   */
  setOpacity (opacity) {
    super._set('stop-opacity', opacity);

    return this;
  }

  /**
   * Get the opacity of the stop.
   *
   * @returns {number} The opacity value.
   */
  getOpacity () {
    return super._getAsNumber('stop-opacity');
  }
}
