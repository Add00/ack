import { FontStyle } from '../styles/FontStyle.js';
import { Geometry } from '../geometry/Geometry.js';

export class TextContent extends Geometry {
  constructor (shape, fontStyle) {
    super(shape);

    this.setFontStyle(fontStyle);
  }

  // Accessors

  setContent (content) {
    super.Shape().textContent = content;

    return this;
  }

  getContent () {
    return super.Shape().textContent;
  }

  setFontStyle (fontStyle) {
    Object.keys(fontStyle).forEach((property) => {
      this.Shape().style[property] = fontStyle[property];
    });

    return this;
  }

  getFontStyle () {
    const fontStyle = new FontStyle();

    Object.keys(fontStyle).forEach((property) => {
      fontStyle[property] = this.Shape().style[property];
    });

    return fontStyle;
  }

  getTextLength () {
    return super._getAsNumber('textLength');
  }

  getNumberOfChars () {
    return super.Shape().getNumberOfChars();
  }

  getStartPositionOfChar () {
    return super.Shape().getStartPositionOfChar();
  }

  getEndPositionOfChar () {
    return super.Shape().getEndPositionOfChar();
  }

  getRotationOfChar () {
    return super.Shape().getRotationOfChar();
  }
}
