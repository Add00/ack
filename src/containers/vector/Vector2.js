/** @namespace vector */

/**
 * Represents a 2D vector with x and y components.
 */
export class Vector2 {
  #x;
  #y;

  /**
   * Creates a new Vector2 instance.
   *
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
   *
   * @param {number} x - The new x-component value.
   * @returns {Vector2} This Vector2 instance.
   */
  setX (x) {
    this.#x = x;

    return this;
  }

  /**
   * Get the x-component of the vector.
   *
   * @returns {number} The x-component value.
   */
  getX () {
    return this.#x;
  }

  /**
   * Set the y-component of the vector.
   *
   * @param {number} y - The new y-component value.
   * @returns {Vector2} This Vector2 instance.
   */
  setY (y) {
    this.#y = y;

    return this;
  }

  /**
   * Get the y-component of the vector.
   *
   * @returns {number} The y-component value.
   */
  getY () {
    return this.#y;
  }

  /**
   * Set both x and y components of the vector.
   *
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

  /**
   * Create a deep copy of this vector.
   *
   * @returns {Vector2} A new Vector2 instance with the same values.
   */
  clone () {
    return new Vector2(this.#x, this.#y);
  }

  /**
   * Calculate the magnitude or length of the vector.
   *
   * @returns {number} The magnitude of the vector.
   */
  magnitude () {
    return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
  }

  /**
   * Calculate the magnitude or length of the vector.
   *
   * @alias Vector2.magnitude()
   * @returns {number} The length of the vector.
   */
  length () {
    return this.magnitude();
  }

  /**
   * Normalize the vector to have a magnitude of 1.
   *
   * @returns {Vector2} This Vector2 instance after normalization.
   */
  normalize () {
    const mag = this.magnitude();

    if (mag !== 0) {
      this.#x /= mag;
      this.#y /= mag;
    }

    return this;
  }

  /**
   * Calculate the Euclidean distance between this vector and another vector.
   *
   * @param {Vector2} other - The other vector.
   * @returns {number} The distance between this vector and the other vector.
   */
  distance (other) {
    return Math.sqrt((this.#x - other.#x) * (this.#x - other.#x) + (this.#y - other.#y) * (this.#y - other.#y));
  }

  /**
   * Calculate the dot product of this vector and another vector.
   *
   * @param {Vector2} other - The other vector.
   * @returns {number} The dot product of the two vectors.
   */
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

  /**
   * Compare this vector to another vector by magnitude.
   *
   * @param {Vector2} other - The other vector.
   * @returns {number} 1 if this vector is larger, -1 if smaller, 0 if equal in magnitude.
   */
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

  // Iterator

  /**
   * Allows iteration over the components (x and y) of the vector.
   *
   * @returns {Iterator<number>} An iterator for the components of the vector.
   */
  [Symbol.iterator] () {
    let index = 0;
    const elements = [this.#x, this.#y];

    return {
      next: () => {
        if (index < elements.length) {
          return { value: elements[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}
