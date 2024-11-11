/** @namespace vector */

import { Vector2 } from './Vector2.js';

/**
 * Represents a 3D vector with x, y, and z components.
 *
 * @extends Vector2
 */
export class Vector3 extends Vector2 {
  #z;

  /**
   * Creates a new Vector3 instance.
   *
   * @constructor Vector2
   * @param {number} [x=0] - The x-component of the vector.
   * @param {number} [y=0] - The y-component of the vector.
   * @param {number} [z=0] - The z-component of the vector.
   */
  constructor (x = 0, y = 0, z = 0) {
    super(x, y);
    this.#z = z;
  }

  /**
   * Get the z-component of the vector.
   *
   * @returns {number} The z-component value.
   */
  getZ () {
    return this.#z;
  }

  /**
   * Set the z-component of the vector.
   *
   * @param {number} z - The new z-component value.
   * @returns {Vector3} This Vector3 instance.
   */
  setZ (z) {
    this.#z = z;

    return this;
  }

  /**
   * Set all three components of the vector.
   *
   * @override
   * @param {number} x - The new x-component value.
   * @param {number} y - The new y-component value.
   * @param {number} z - The new z-component value.
   * @returns {Vector3} This Vector3 instance.
   */
  set (x, y, z) {
    this.#z = z;

    return super.set(x, y);
  }

  /**
   * Create a copy of this vector.
   *
   * @override
   * @returns {Vector3} A new Vector3 instance with the same values.
   */
  clone () {
    return new Vector3(super.getX(), super.getY(), this.getZ());
  }

  /**
   * Calculate the magnitude or length of the vector.
   *
   * @override
   * @returns {number} The magnitude of the vector.
   */
  magnitude () {
    return Math.sqrt(
      super.getX() * super.getX() +
      super.getY() * super.getY() +
      this.getZ() * this.getZ()
    );
  }

  /**
   * Calculate the magnitude or length of the vector.
   *
   * @override
   * @alias Vector2.magnitude()
   * @returns {number} The length of the vector.
   */
  length () {
    return this.magnitude();
  }

  /**
   * Normalize the vector to have a magnitude of 1.
   *
   * @override
   * @returns {Vector3} This Vector3 instance after normalization.
   */
  normalize () {
    const mag = this.magnitude();

    if (mag !== 0) {
      super.normalize();
      this.#z /= mag;
    }

    return this;
  }

  /**
   * Calculate the Euclidean distance between this vector and another vector.
   *
   * @override
   * @param {Vector3} other - The other vector.
   * @returns {number} The distance between this vector and the other vector.
   */
  distance (other) {
    const dx = this.getX() - other.getX();
    const dy = this.getY() - other.getY();
    const dz = this.getZ() - other.getZ();

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  /**
   * Calculate the dot product of this vector and another vector.
   *
   * @override
   * @param {Vector3} other - The other vector.
   * @returns {number} The dot product of the two vectors.
   */
  dot (other) {
    return super.dot(other) + this.#z * other.#z;
  }

  add (other) {
    this.#z += other.#z;

    return super.add(other);
  }

  addScalar (scalar) {
    this.#z += scalar;

    return super.addScalar(scalar);
  }

  subtract (other) {
    this.#z -= other.#z;

    return super.subtract(other);
  }

  subtractScalar (scalar) {
    this.#z -= scalar;

    return super.subtractScalar(scalar);
  }

  multiply (other) {
    this.#z *= other.getZ();

    return super.multiply(other);
  }

  multiplyScalar (scalar) {
    this.#z *= scalar;

    return super.multiplyScalar(scalar);
  }

  divide (other) {
    if (
      other.getX() !== 0 &&
            other.getY() !== 0 &&
            other.getZ() !== 0
    ) {
      this.#z /= other.getZ();
      super.divide(other);
    }

    return this;
  }

  divideScalar (scalar) {
    if (scalar !== 0) {
      this.#z /= scalar;
      super.divideScalar(scalar);
    }

    return this;
  }

  negate () {
    this.#z *= -1;

    return super.negate();
  }

  invert () {
    this.#z = 1 / this.#z;

    return super.invert();
  }

  /**
   * Compare this vector to another vector by magnitude.
   *
   * @override
   * @param {Vector3} other - The other vector.
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

  [Symbol.iterator] () {
    const parentIterator = super[Symbol.iterator]();
    const z = this.#z;

    return {
      next: () => {
        const parentResult = parentIterator.next();
        if (!parentResult.done) {
          return { value: parentResult.value, done: false };
        } else if (parentResult.done && z !== undefined) {
          return { value: z, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}
