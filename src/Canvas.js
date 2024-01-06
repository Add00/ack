import { Quadrilateral } from '../src/geometry/Quadrilateral.js';

/**
 *
 *
 * @extends Geometry
 */
export class Canvas extends Quadrilateral {
  // Static

  /**
   * Creates a new Canvas instance.
   *
   * @param {number} x - The x-coordinate of the canvas.
   * @param {number} y - The y-coordinate of the canvas.
   * @param {number} width - The width of the canvas.
   * @param {number} height - The height of the canvas.
   * @param {Array<number>} viewBox - The initial viewBox of the canvas.
   */
  static from (x, y, width, height, viewBox = [x, y, width, height]) {
    return new Canvas(x, y, width, height, viewBox);
  }

  /**
   * Creates a new Canvas instance from an object.
   *
   * @param {object} svg - An object containing x, y, width, height, and viewBox properties.
   * @returns {Canvas} The new Canvas instance.
   */
  static parse ({ x, y, width, height, viewBox = [x, y, width, height] }) {
    return new Canvas(x, y, width, height, viewBox);
  }

  static wrap (svg) {
    return new Canvas(svg);
  }

  /**
   * The internal representation of the canvas viewBox.
   *
   * [0] - x
   * [1] - y
   * [2] - width
   * [3] - height
   * @type {number[]}
   * @private
   */
  #viewBox = new Array(4);

  /**
   * Updates the viewBox property of the canvas.
   *
   * @private
   */
  #updateViewBox () {
    this._set('viewBox', this.#viewBox.join(' '));
  }

  /**
   * Creates a new Canvas instance.
   *
   * @param {number} x - The x-coordinate of the canvas.
   * @param {number} y - The y-coordinate of the canvas.
   * @param {number} width - The width of the canvas.
   * @param {number} height - The height of the canvas.
   * @param {Array<number>} [viewBox=[x, y, width, height]] - The initial viewBox of the canvas. Default is [x, y, width, height].
   */
  constructor (x, y, width, height, viewBox = [x, y, width, height]) {
    if (typeof x === 'number') {
      super('svg');

      super.setX(x);
      super.setY(y);
      super.setWidth(width);
      super.setHeight(height);

      this.#viewBox = viewBox;
    } else {
      super(x);
    }
  }

  /**
   * Sets the x-coordinate of the canvas.
   *
   * @param {number} x - The new x-coordinate.
   * @returns {Canvas} The Canvas instance for method chaining.
   */
  setViewBoxX (x) {
    this.#viewBox[0] = x;
    this.#updateViewBox();

    return this;
  }

  /**
   * Gets the x-coordinate of the canvas.
   *
   * @returns {number} The x-coordinate of the canvas.
   */
  getViewBoxX () {
    return this.#viewBox[0];
  }

  /**
   * Sets the y-coordinate of the canvas.
   *
   * @param {number} y - The new y-coordinate.
   * @returns {Canvas} The Canvas instance for method chaining.
   */
  setViewBoxY (y) {
    this.#viewBox[1] = y;
    this.#updateViewBox();

    return this;
  }

  /**
   * Gets the y-coordinate of the canvas.
   *
   * @returns {number} The y-coordinate of the canvas.
   */
  getViewBoxY () {
    return this.#viewBox[1];
  }

  /**
   * Sets the width of the canvas.
   *
   * @param {number} width - The new width.
   * @throws {Error} Throws an error if the width is not a positive number.
   * @returns {Canvas} The Canvas instance for method chaining.
   */
  setViewBoxWidth (width) {
    if (width < 0) {
      throw new Error('Width must be a positive number');
    }

    this.#viewBox[2] = width;
    this.#updateViewBox();

    return this;
  }

  /**
   * Gets the width of the canvas.
   *
   * @returns {number} The width of the canvas.
   */
  getViewBoxWidth () {
    return this.#viewBox[2];
  }

  /**
   * Sets the height of the canvas.
   *
   * @param {number} height - The new height.
   * @throws {Error} Throws an error if the height is not a positive number.
   * @returns {Canvas} The Canvas instance for method chaining.
   */
  setViewBoxHeight (height) {
    if (height < 0) {
      throw new Error('Height must be a positive number');
    }

    this.#viewBox[3] = height;
    this.#updateViewBox();

    return this;
  }

  /**
   * Gets the height of the canvas.
   *
   * @returns {number} The height of the canvas.
   */
  getViewBoxHeight () {
    return this.#viewBox[3];
  }
}
