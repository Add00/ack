import { Element } from './Element.js';

export class Graphic extends Element {
  // Accessors

  getBoundingBox (options = undefined) {
    return super.Shape().getBBox(options);
  }
}
