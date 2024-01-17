import { Element } from './Element.js';

/**
 * Represents a visible element.
 *
 * @extends Element
 */
export class Graphic extends Element {
  // Accessors

  /**
   * Retrieves the bounding box of the graphic, which is the smallest rectangle
   * containing the entire object.
   *
   * @param {boolean} [fill=true] - Whether to include the fill when calculating the bounding box.
   * @param {boolean} [stroke=false] - Whether to include the stroke when calculating the bounding box.
   * @param {boolean} [markers=false] - Whether to include markers when calculating the bounding box.
   * @param {boolean} [clipped=false] - Whether to include clipped content when calculating the bounding box.
   * @returns {DOMRect} - The bounding box of the graphic.
   */
  getBoundingBox ({ fill = true, stroke = false, markers = false, clipped = false }) {
    super.Shape().getBBox({ fill, stroke, markers, clipped });
  }

  /**
   * Retrieves the current transformation matrix (CTM) of the graphic.
   *
   * @returns {DOMMatrix} - The current CTM of the graphic.
   */
  getCTM () {
    return super.Shape().getCTM();
  }

  /**
   * Retrieves the current screen transformation matrix (CTM) of the graphic.
   *
   * @returns {DOMMatrix} - The current screen CTM of the graphic.
   */
  getScreenCTM () {
    return super.Shape().getScreenCTM();
  }

  /**
   * Retrieves the current screen transformation matrix (CTM) of the graphic.
   *
   * @alias getScreenCTM()
   * @returns {DOMMatrix} - The current screen CTM of the graphic.
   */
  getClientCTM () {
    return this.getScreenCTM();
  }
}
