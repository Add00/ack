/** @namespace vector */

/**
 * Represents a 2D vector with x and y components.
 */
export class Vector2 {
  #x;
  #y;

  /**
     * Calculate the angle in radians between two vectors.
     * @param {Vector2} v1 - The first vector.
     * @param {Vector2} v2 - The second vector.
     * @returns {number} The angle between the two vectors in radians.
     */
  // static angleBetween(v1, v2) {
  //     const dot = v1.dotProduct(v2);
  //     const mag1 = v1.magnitude();
  //     const mag2 = v2.magnitude();
  //     return Math.acos(dot / (mag1 * mag2));
  // }

  /**
     * Creates a new Vector2 instance.
     * @param {number} [x=0] - The x-component of the vector.
     * @param {number} [y=0] - The y-component of the vector.
     */
  constructor (x = 0, y = 0) {
    this.#x = x;
    this.#y = y;
  }

  // Accessors

  /**
     * Set the x-component of the vector.
     * @param {number} x - The new x-component value.
     * @returns {Vector2} This Vector2 instance.
     */
  setX (x) {
    this.#x = x;

    return this;
  }

  /**
     * Get the x-component of the vector.
     * @returns {number} The x-component value.
     */
  getX () {
    return this.#x;
  }

  /**
     * Set the y-component of the vector.
     * @param {number} y - The new y-component value.
     * @returns {Vector2} This Vector2 instance.
     */
  setY (y) {
    this.#y = y;

    return this;
  }

  /**
     * Get the y-component of the vector.
     * @returns {number} The y-component value.
     */
  getY () {
    return this.#y;
  }

  /**
     * Set both x and y components of the vector.
     * @param {number} x - The new x-component value.
     * @param {number} y - The new y-component value.
     * @returns {Vector2} This Vector2 instance.
     */
  set (x, y) {
    this.#x = x;
    this.#y = y;

    return this;
  }

  // Methods

  // Write tests for this method:
  clone () {
    return new Vector2(this.#x, this.#y);
  }

  magnitude () {
    return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
  }

  length () {
    return this.magnitude();
  }

  normalize () {
    const mag = this.magnitude();

    if (mag !== 0) {
      this.#x /= mag;
      this.#y /= mag;
    }

    return this;
  }

  distance (other) {
    return Math.sqrt((this.#x - other.#x) * (this.#x - other.#x) + (this.#y - other.#y) * (this.#y - other.#y));
  }

  dot (other) {
    return this.#x * other.#x + this.#y * other.#y;
  }

  add (other) {
    this.#x += other.#x;
    this.#y += other.#y;

    return this;
  }

  addScalar (scalar) {
    this.#x += scalar;
    this.#y += scalar;

    return this;
  }

  subtract (other) {
    this.#x -= other.#x;
    this.#y -= other.#y;

    return this;
  }

  subtractScalar (scalar) {
    this.#x -= scalar;
    this.#y -= scalar;

    return this;
  }

  multiply (other) {
    this.#x *= other.#x;
    this.#y *= other.#y;

    return this;
  }

  multiplyScalar (scalar) {
    this.#x *= scalar;
    this.#y *= scalar;

    return this;
  }

  divide (other) {
    if (other.#x !== 0 && other.#y !== 0) {
      this.#x /= other.#x;
      this.#y /= other.#y;
    }

    return this;
  }

  divideScalar (scalar) {
    if (scalar !== 0) {
      this.#x /= scalar;
      this.#y /= scalar;
    }

    return this;
  }

  negate () {
    this.#x *= -1;
    this.#y *= -1;

    return this;
  }

  invert () {
    this.#x = 1 / this.#x;
    this.#y = 1 / this.#y;

    return this;
  }

  compare (other) {
    const thisMagnitude = this.magnitude();
    const otherMagnitude = other.magnitude();

    if (thisMagnitude > otherMagnitude) {
      return 1;
    } else if (thisMagnitude < otherMagnitude) {
      return -1;
    } else {
      return 0;
    }
  }
}
