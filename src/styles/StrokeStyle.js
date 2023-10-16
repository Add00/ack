import { Style } from './Style.js';

/**
 * Represents a stroke style configuration for SVG shapes.
 * @class
 */
export class StrokeStyle extends Style {
  /**
     * Create a new StrokeStyle instance.
     * @constructor
     * @param {object} [options={}] - The stroke style options.
     * @param {color} [options.stroke='black'] - The stroke color.
     * @param {number} [options.strokeWidth=1] - The stroke width.
     * @param {number} [options.strokeOpacity=1] - The stroke opacity.
     * @param {string} [options.strokeLinecap='butt'] - The stroke linecap style ('butt', 'square', or 'round').
     * @param {string} [options.strokeLinejoin='miter'] - The stroke linejoin style ('miter', 'round', or 'bevel').
     * @param {string} [options.strokeDasharray=''] - The stroke dash array pattern.
     */
  constructor ({
    stroke = 'black',
    strokeWidth = 1,
    strokeOpacity = 1,
    strokeLinecap = 'butt',
    strokeLinejoin = 'miter',
    strokeDasharray = ''
  } = {}) {
    super();
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;
    this.strokeOpacity - strokeOpacity;
    this.strokeLinecap = strokeLinecap;
    this.strokeLinejoin = strokeLinejoin;
    this.strokeDasharray = strokeDasharray;
  }
}
