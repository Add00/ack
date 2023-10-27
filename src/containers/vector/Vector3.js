/** @namespace vector */

import { Vector2 } from './Vector2.js';

export class Vector3 extends Vector2 {
  #z;

  constructor (x = 0, y = 0, z = 0) {
    super(x, y);
    this.#z = z;
  }

  getZ () {
    return this.#z;
  }

  setZ (z) {
    this.#z = z;

    return this;
  }

  set (x, y, z) {
    this.#z = z;

    return super.set(x, y);
  }

  clone () {
    return new Vector3(super.getX(), super.getY(), this.getZ());
  }

  magnitude () {
    return Math.sqrt(
      super.getX() * super.getX() +
            super.getY() * super.getY() +
            this.getZ() * this.getZ()
    );
  }

  length () {
    return this.magnitude();
  }

  normalize () {
    const mag = this.magnitude();

    if (mag !== 0) {
      super.normalize();
      this.#z /= mag;
    }

    return this;
  }

  distance (other) {
    const dx = this.getX() - other.getX();
    const dy = this.getY() - other.getY();
    const dz = this.getZ() - other.getZ();

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

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
