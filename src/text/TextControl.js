import { FontStyle } from '../styles/FontStyle.js';
import { Geometry } from '../geometry/Geometry.js';

/**
 * Represents a control for displaying text within an SVG shape.
 * @extends Geometry
 */
export class TextControl extends Geometry {
  /**
     * Create a new TextControl instance.
     *
     * @param {string} shape - The type of TextControl (can be 'text', or 'tspan') as an SVG element name.
     * @param {number} x - The x-coordinate of the control.
     * @param {number} y - The y-coordinate of the control.
     * @param {FontStyle} [fontStyle=new FontStyle()] - The font style to apply to the text.
     */
  constructor (shape, x, y, fontStyle = new FontStyle()) {
    super(document.createElementNS('http://www.w3.org/2000/svg', shape));

    // super.setX(x);
    // super.setY(y);
    this.setFontStyle(fontStyle);
  }

  /**
     * Set the content (text) to display within the control.
     *
     * @param {string | TextSpan[] } content - The text content or an array of TextSpans to set.
     * @returns {TextControl} - The TextControl instance.
     */
  setContent (content) {
    if (typeof content === 'string') {
      super.Shape().textContent = content;
    } else if (Array.isArray(content)) {
      super.nest(...content);
    }

    return this;
  }

  /**
     * Get the content (text) currently displayed within the control.
     *
     * @returns {string} - The current text content.
     */
  getContent () {
    return super.Shape().textContent;
  }

  /**
     * Set the font style for the text within the control.
     *
     * @param {FontStyle} fontStyle - The font style to apply.
     * @returns {TextControl} - The TextControl instance.
     */
  setFontStyle (fontStyle) {
    Object.keys(fontStyle).forEach((property) => {
      this.Shape().style[property] = fontStyle[property];
    });

    return this;
  }

  /**
     * Get the font style applied to the text within the control.
     *
     * @returns {FontStyle} - The font style object.
     */
  getFontStyle () {
    const fontStyle = new FontStyle();

    Object.keys(fontStyle).forEach((property) => {
      fontStyle[property] = this.Shape().style[property];
    });

    return fontStyle;
  }

  /**
     * Set the horizontal shift of the control.
     *
     * @param {number} dx - The horizontal shift value.
     * @returns {TextControl} - The TextControl instance.
     */
  setShiftX (dx) {
    super._set('shiftX', dx);

    return this;
  }

  /**
     * Get the horizontal shift value of the control.
     *
     * @returns {number} - The horizontal shift value.
     */
  getShiftX () {
    return super._getAsNumber('dx');
  }

  /**
     * Set the vertical shift of the control.
     *
     * @param {number} dy - The vertical shift value.
     * @returns {TextControl} - The TextControl instance.
     */
  setShiftY (dy) {
    super._set('shiftY', dy);

    return this;
  }

  /**
     * Get the vertical shift value of the control.
     *
     * @returns {number} - The vertical shift value.
     */
  getShiftY () {
    return super._getAsNumber('dy');
  }

  /**
     * Set the rotation angle of the control.
     *
     * @param {number} rotate - The rotation angle in degrees.
     * @returns {TextControl} - The TextControl instance.
     */
  setRotation (rotate) {
    super._set('rotate', rotate);

    return this;
  }

  /**
     * Get the rotation angle of the control.
     *
     * @returns {number} - The rotation angle in degrees.
     */
  getRotation () {
    return super._getAsNumber('rotate');
  }
}
