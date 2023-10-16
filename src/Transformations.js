/**
 * A utility class for applying SVG transformations to shapes.
 */
export class Transformations {
  /**
   * Translates a shape by the specified x and y coordinates.
   *
   * @param {Shape} shape - The shape to be translated.
   * @param {number} x - The x-coordinate of the translation.
   * @param {number} y - The y-coordinate of the translation.
   * @returns {Shape} The transformed shape.
   */
  static Translate (shape, x, y) {
    shape.Shape().setAttribute('transform', `translate(${x}, ${y})`);

    return shape;
  }

  /**
   * Rotates a shape by the specified angle (in degrees).
   *
   * @param {Shape} shape - The shape to be rotated.
   * @param {number} angle - The angle of rotation (in degrees).
   * @returns {Shape} The transformed shape.
   */
  static Rotate (shape, angle) {
    shape.Shape().setAttribute('transform', `rotate(${angle})`);

    return shape;
  }

  /**
   * Skews a shape along the x-axis by the specified angle (in degrees).
   *
   * @param {Shape} shape - The shape to be skewed.
   * @param {number} angle - The angle of skew along the x-axis (in degrees).
   * @returns {Shape} The transformed shape.
   */
  static SkewX (shape, angle) {
    shape.Shape().setAttribute('transform', `skewX(${angle})`);

    return shape;
  }

  /**
   * Skews a shape along the y-axis by the specified angle (in degrees).
   *
   * @param {Shape} shape - The shape to be skewed.
   * @param {number} angle - The angle of skew along the y-axis (in degrees).
   * @returns {Shape} The transformed shape.
   */
  static SkewY (shape, angle) {
    shape.Shape().setAttribute('transform', `skewY(${angle})`);

    return shape;
  }

  /**
   * Scales a shape by the specified scaling factors along the x and y axes.
   *
   * @param {Shape} shape - The shape to be scaled.
   * @param {number} x - The scaling factor along the x-axis.
   * @param {number} y - The scaling factor along the y-axis.
   * @returns {Shape} The transformed shape.
   */
  static Scale (shape, x, y) {
    shape.Shape().setAttribute('transform', `scale(${x}, ${y})`);

    return shape;
  }
}
