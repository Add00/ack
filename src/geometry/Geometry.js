/** @namespace geometry */

import { Graphic } from '../Graphic.js';
import { FillStyle } from '../styles/FillStyle.js';
import { StrokeStyle } from '../styles/StrokeStyle.js';
import { PointerEvents } from '../styles/PointerEvents.js';

/**
 * The base class of all shape related classes.
 *
 * @extends {Graphic}
 */
export class Geometry extends Graphic {
  // Accessors

  /**
   * Set the stroke style properties for the shape.
   *
   * @param {StrokeStyle} strokeStyle - An object containing stroke style properties.
   * @returns {Geometry} The current instance.
   */
  setStrokeStyle (strokeStyle) {
    Object.keys(strokeStyle).forEach((property) => {
      this.Shape().style[property] = strokeStyle[property];
    });

    return this;
  }

  /**
   * Get the stroke style properties of the shape.
   *
   * @returns {StrokeStyle} The stroke style properties of the shape.
   */
  getStrokeStyle () {
    const strokeStyle = new StrokeStyle();

    Object.keys(strokeStyle).forEach((property) => {
      strokeStyle[property] = this.Shape().style[property];
    });

    return strokeStyle;
  }

  /**
   * Set the fill style properties for the shape.
   *
   * @param {FillStyle} fillStyle - An object containing fill style properties.
   * @returns {Geometry} The current instance.
   */
  setFillStyle (fillStyle) {
    Object.keys(fillStyle).forEach((property) => {
      this.Shape().style[property] = fillStyle[property];
    });

    return this;
  }

  /**
   * Get the fill style properties of the shape.
   *
   * @returns {FillStyle} The fill style properties of the shape.
   */
  getFillStyle () {
    const fillStyle = new FillStyle();

    Object.keys(fillStyle).forEach((property) => {
      fillStyle[property] = this.Shape().style[property];
    });

    return fillStyle;
  }

  /**
   * Set the opacity of the shape.
   *
   * @param {number} [opacity=1] - The opacity value can be between 0 and 1 (default is 1).
   * @returns {Shape} The current Shape instance for method chaining.
   */
  setOpacity (opacity = 1) {
    super.Shape().setAttribute('opacity', opacity);

    return this;
  }

  /**
   * Get the opacity of the shape.
   *
   * @returns {number} - The opacity value.
   */
  getOpacity () {
    return super._getAsNumber('opacity');
  }

  /**
   * Set the pointer events for the shape.
   *
   * @param {PointerEvents} pointerEvent - The pointer events value.
   * @returns {Geometry} The current instance.
   */
  setPointerEvents (pointerEvent) {
    super._set('pointer-events', pointerEvent.toString());

    return this;
  }

  /**
   * Get the pointer events of the shape.
   *
   * @returns {PointerEvents} The current pointer event.
   */
  getPointerEvents () {
    return new PointerEvents(super._getAsString('pointer-events'));
  }

  /**
   * Check if a point is inside the filled area of the shape.
   *
   * @param {object} point - The point to check.
   * @returns {boolean} `true` if the point is inside the filled area, `false` otherwise.
   */
  isPointInFill (point) {
    return super.Shape().isPointInFill(point);
  }

  /**
   * Check if a point is inside the stroked area of the shape.
   *
   * @param {object} point - The point to check.
   * @returns {boolean} `True` if the point is inside the stroked area, `false` otherwise.
   */
  isPointInStroke (point) {
    return super.Shape().isPointInStroke(point);
  }
}
