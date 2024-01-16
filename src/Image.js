import { Quadrilateral } from '../src/geometry/Quadrilateral.js';

/**
 * Represents a raster image with position and dimensions.
 *
 * @extends Quadrilateral
 */
export class Image extends Quadrilateral {
  // Static

  /**
   * Parse an object into a Image.
   *
   * @param {Object} Image - An object with properties (x, y, width, height, href).
   * @returns {Rectangle} A new Image.
   */
  static parse ({ x, y, width, height, href, crossOrigin = '', decoding = 'auto' }) {
    return new Image(x, y, width, height, href, crossOrigin, decoding);
  }

  /**
   * Build a Image with specified properties.
   *
   * @param {number} x - The x-coordinate of the image.
   * @param {number} y - The y-coordinate of the image.
   * @param {number} width - The width of the image.
   * @param {number} height - The height of the image.
   * @param {string} href - The source URL of the image.
   * @param {'anonymous' | 'use-credentials' | ''} [crossOrigin='']
   * @param {'sync' | 'async' | 'auto'} [decoding='auto']
   * @returns {Rectangle} A new Image.
   */
  static from (x, y, width, height, href, crossOrigin = '', decoding = 'auto') {
    return new Image(x, y, width, height, href, crossOrigin, decoding);
  }

  /**
   * Creates a new Image object.
   *
   * @param {number} x - The x-coordinate of the image.
   * @param {number} y - The y-coordinate of the image.
   * @param {number} width - The width of the image.
   * @param {number} height - The height of the image.
   * @param {string} href - The source URL of the image.
   * @param {'anonymous' | 'use-credentials' | ''} [crossOrigin='']
   * @param {'sync' | 'async' | 'auto'} [decoding='auto']
   */
  constructor (x, y, width, height, href, crossOrigin = '', decoding = 'auto') {
    super('image');

    super.setX(x);
    super.setY(y);
    super.setWidth(width);
    super.setHeight(height);
    this.setHref(href);
    this.setCrossOrigin(crossOrigin);
    this.setDecoding(decoding);
  }

  // Accessors

  /**
   * Sets the source URL of the image.
   *
   * @param {string} href - The source URL of the image.
   * @returns {Image} - The Image instance for method chaining.
   */
  setHref (href) {
    super._set('href', href);

    return this;
  }

  /**
   * Gets the source URL of the image.
   *
   * @returns {string} - The source URL of the image.
   */
  getHref () {
    return super._getAsString('href');
  }

  /**
   * Sets the cross-origin attribute for image loading.
   *
   * @param {'anonymous' | 'use-credentials' | ''} crossOrigin
   *   - The cross-origin attribute for image loading.
   * @returns {Image} - The Image instance for method chaining.
   */
  setCrossOrigin (crossOrigin) {
    super._set('crossorigin', crossOrigin);

    return this;
  }

  /**
   * Gets the cross-origin attribute for image loading.
   *
   * @returns {string} - The cross-origin attribute for image loading.
   */
  getCrossOrigin () {
    return super._getAsString('crossorigin');
  }

  /**
   * Sets the decoding attribute for image loading.
   *
   * @param {'sync' | 'async' | 'auto'} decoding - The decoding attribute for image loading.
   * @returns {Image} - The Image instance for method chaining.
   */
  setDecoding (decoding) {
    super._set('decoding', decoding);

    return this;
  }

  /**
   * Gets the decoding option for image loading.
   *
   * @returns {'sync' | 'async' | 'auto'} - The decoding attribute for image loading.
   */
  getDecoding () {
    return super._getAsString('decoding');
  }

  // Methods

  /**
   * Create a deep copy of the current Image.
   *
   * @override
   * @returns {Image} A new Image with the same properties.
   */
  clone () {
    return new Image(
      this.getX(),
      this.getY(),
      this.getWidth(),
      this.getHeight(),
      this.getCrossOrigin(),
      this.getDecoding()
    );
  }
}
