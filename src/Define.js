import { Graphic } from './Graphic.js';

export class Define extends Graphic {
  static from (...elements) {
    return new Define().nest(...elements);
  }

  constructor () {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'defs'));
  }
}
