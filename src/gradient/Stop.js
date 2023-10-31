import { Element } from '../Element.js';

export class Stop extends Element {
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
