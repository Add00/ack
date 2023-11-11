import { FontStyle } from '../styles/FontStyle.js';
import { TextPositioning } from './TextPositioning.js';

export class TextSpan extends TextPositioning {
  // Static

  static from (content, x, y, fontStyle = new FontStyle()) {
    return new TextSpan(content, x, y, fontStyle);
  }

  constructor (content, x, y, fontStyle = new FontStyle()) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'tspan'), fontStyle);

    this.setContent(content);
    super.setX(x);
    super.setY(y);
  }
}
