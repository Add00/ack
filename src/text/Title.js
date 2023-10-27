import { FontStyle } from '../styles/FontStyle.js';
import { Element } from '../Element.js';

export class Title extends Element {
  // Static

  static build (content, x = 0, y = 0, fontStyle = new FontStyle()) {
    return new Title(content, x, y, fontStyle);
  }

  constructor (content, x = 0, y = 0, fontStyle = new FontStyle()) {
    super('title', x, y, fontStyle);
    this.setContent(content);
  }
}
