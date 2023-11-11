import { TextContent } from './TextContent.js';
import { FontStyle } from '../styles/FontStyle.js';

export class Title extends TextContent {
  // Static

  static from (content, x = 0, y = 0) {
    return new Title(content, x, y);
  }

  constructor (content, x = 0, y = 0) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'title'), new FontStyle());
    this.setContent(content);
  }
}
