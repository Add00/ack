import { Element } from './Element.js';

export class Graphic extends Element {
  // Accessors

  async getBoundingBox (options = undefined) {
    super.Shape().getBBox(options);
  }

  getCTM () {
    return super.Shape().getCTM();
  }

  getScreenCTM () {
    return super.Shape().getScreenCTM();
  }
}
