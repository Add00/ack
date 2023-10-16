import { FontStyle } from '../styles/FontStyle.js';
import { TextPositioning } from './TextPositioning.js';

export class Text extends TextPositioning {
  // Static

  static build (content, x, y, fontStyle = new FontStyle()) {
    return new Text(content, x, y, fontStyle);
  }

  constructor (content, x, y, fontStyle = new FontStyle()) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'text'), fontStyle);

    this.setContent(content);
    super.setX(x);
    super.setY(y);
  }
}
