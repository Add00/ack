/** @namespace style */

import { Style } from './Style.js';

/**
 * Represents a style for text font properties.
 *
 * @extends Style
 */
export class FontStyle extends Style {
  /**
   * Create a new FontStyle instance with the specified font properties.
   *
   * @constructor FontStyle
   * @param {Object} options - The options for configuring the font style.
   * @param {string} [options.fontFamily='Arial'] - The font family for the text.
   * @param {string} [options.fontStyle='normal'] - The font style (e.g., 'normal', 'italic', 'oblique').
   * @param {string} [options.fontWeight='normal'] - The font weight (e.g., 'normal', 'bold').
   * @param {string} [options.fontVariant='normal'] - The font variant (e.g., 'normal', 'small-caps').
   * @param {string} [options.fontStretch='normal'] - The font stretch (e.g., 'normal', 'condensed', 'expanded').
   * @param {string} [options.fontSize='12px'] - The font size (e.g., '12px', '1rem').
   * @param {string} [options.fontSizeAdjust='none'] - The font size adjustment.
   * @param {string} [options.kerning='auto'] - The kerning option (e.g., 'auto', 'normal').
   * @param {string} [options.letterSpacing='normal'] - The letter spacing (e.g., 'normal', '1px').
   * @param {string} [options.wordSpacing='normal'] - The word spacing (e.g., 'normal', '2px').
   * @param {string} [options.textDecoration='none'] - The text decoration (e.g., 'none', 'underline', 'line-through').
   */
  constructor ({
    fontFamily = 'Arial',
    fontStyle = 'normal',
    fontWeight = 'normal',
    fontVariant = 'normal',
    fontStretch = 'normal',
    fontSize = '12px',
    fontSizeAdjust = 'none',
    kerning = 'auto',
    letterSpacing = 'normal',
    wordSpacing = 'normal',
    textDecoration = 'none'
  } = {}) {
    super();
    this.fontFamily = fontFamily;
    this.fontStyle = fontStyle;
    this.fontWeight = fontWeight;
    this.fontVariant = fontVariant;
    this.fontStretch = fontStretch;
    this.fontSize = fontSize;
    this.fontSizeAdjust = fontSizeAdjust;
    this.kerning = kerning;
    this.letterSpacing = letterSpacing;
    this.wordSpacing = wordSpacing;
    this.textDecoration = textDecoration;
  }
}
