import { FontStyle } from '../styles/FontStyle.js';
import { TextControl } from './TextControl.js';

export class Title extends TextControl {
  // Static

  static build (content, x = 0, y = 0, fontStyle = new FontStyle()) {
    return new Title(content, x, y, fontStyle);
  }

  constructor (content, x = 0, y = 0, fontStyle = new FontStyle()) {
    super('title', x, y, fontStyle);
    this.setContent(content);
  }
}
