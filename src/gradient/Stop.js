import { Element } from '../Element.js';

export class Stop extends Element {
  /**
   * Creates a new Stop element.
   *
   * @param {number} offset - How far along the gradient the stop should be positioned (default is 0).
   * @param {string} color - The color of the gradient at this stop (default is 'black').
   * @param {number} opacity - The opacity of the stop (default is 1).
   */
  constructor (offset = 0, color = 'black', opacity = 1) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'stop'));

    this.setOffset(offset);
    this.setColor(color);
    this.setOpacity(opacity);
  }

  setOffset (offset) {
    super._set('offset', offset);
  }

  getOffset () {
    return super._getAsNumber('offset');
  }

  setColor (color) {
    super._set('stop-color', color);
  }

  getColor () {
    return super._getAsString('stop-color');
  }

  setOpacity (opacity) {
    super._set('stop-opacity', opacity);
  }

  getOpacity () {
    return super._getAsNumber('stop-opacity');
  }
}
