import { Graphic } from '../Graphic.js';
import { FillStyle } from '../styles/FillStyle.js';
import { StrokeStyle } from '../styles/StrokeStyle.js';
import { PointerEvents } from '../styles/PointerEvents.js';

export class Geometry extends Graphic {
  // Accessors

  setStrokeStyle (strokeStyle) {
    Object.keys(strokeStyle).forEach((property) => {
      this.Shape().style[property] = strokeStyle[property];
    });

    return this;
  }

  getStrokeStyle () {
    const strokeStyle = new StrokeStyle();

    Object.keys(strokeStyle).forEach((property) => {
      strokeStyle[property] = this.Shape().style[property];
    });

    return strokeStyle;
  }

  setFillStyle (fillStyle) {
    Object.keys(fillStyle).forEach((property) => {
      this.Shape().style[property] = fillStyle[property];
    });

    return this;
  }

  getFillStyle () {
    const fillStyle = new FillStyle();

    Object.keys(fillStyle).forEach((property) => {
      fillStyle[property] = this.Shape().style[property];
    });

    return fillStyle;
  }

  /**
   * Set the opacity of the shape.
   * @param {number} [opacity=1] - The opacity value can be between 0 and 1 (default is 1).
   * @returns {Shape} - The current Shape instance for method chaining.
   */
  setOpacity (opacity = 1) {
    super.Shape().setAttribute('opacity', opacity);

    return this;
  }

  /**
   * Get the opacity of the shape.
   * @returns {number|null} - The opacity value or null if not set.
   */
  getOpacity () {
    return super._get('opacity');
  }

  setPointerEvents (pointerEvent) {
    super._set('pointer-events', pointerEvent.toString());

    return this;
  }

  getPointerEvents () {
    return new PointerEvents(super._getAsString('pointer-events'));
  }

  isPointInFill (point) {
    return super.Shape().isPointInFill(point);
  }

  isPointInStroke (point) {
    return super.Shape().isPointInStroke(point);
  }
}
