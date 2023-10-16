import { Conic } from './Conic.js';

/**
 * Define Circle class that extends Shape class.
 * @extends {Geometry}
 */
export class Circle extends Conic {
  // Static

  static build (x, y, r) {
    return new Circle(x, y, r);
  }

  static buildFromVector3 (vector) {
    return new Circle(
      vector.getX(),
      vector.getY(),
      vector.getZ()
    );
  }

  static buildFromDiamiter (x, y, d) {
    return new Circle(x, y, d / 2);
  }

  /**
     * Create a Circle instance.
     * @param {number} x - The x coordinate of the center of the circle.
     * @param {number} y - The y coordinate of the center of the circle.
     * @param {number} r - The radius of the circle.
     */
  constructor (x, y, r) {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'circle'));

    super.setX(x);
    super.setY(y);
    this.setRadius(r);
  }

  // Accessors

  /**
     * Set the radius of the circle.
     * @param {number} r - The new radius of the circle.
     * @returns {Circle} - The instance of the Circle class.
     */
  setRadius (r) {
    super._set('r', r);

    return this;
  }

  /**
     * Get the radius of the circle.
     * @returns {number} - The radius of the circle.
     */
  getRadius () {
    return super._getAsNumber('r');
  }

  // Methods

  isColliding (other) {
    const dx = this.getX() - other.getX();
    const dy = this.getY() - other.getY();
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < this.getRadius() + other.getRadius();
  }
}
