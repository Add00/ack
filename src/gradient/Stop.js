import { Element } from '../Element.js';

export class Stop extends Element {
  constructor (offset = 0, color = 'black', opacity = 1) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'stop'));

    this.setOffset(offset);
    this.setStopColor(color);
    this.setStopOpacity(opacity);
  }

  setOffset (offset) {
    super._set('offset', offset);
  }

  getOffset () {
    return super._getAsNumber('offset');
  }

  setStopColor (color) {
    super._set('stop-color', color);
  }

  getStopColor () {
    return super._getAsNumber('color');
  }

  setStopOpacity (opacity) {
    super._set('stop-opacity', opacity);
  }

  getStopOpacity () {
    return super._getAsNumber('opacity');
  }
}
