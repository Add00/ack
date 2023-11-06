function clamp (value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Represents a percentage value.
 */
export class Percent {
  static from (value, clamped = true) {
    return new Percent(value, clamped);
  }

  #value;

  /**
   * Constructs a Percent instance.
   *
   * @param {number} value - The numeric value.
   * @param {boolean} [clamped=true] - Whether to clamp the value between 0 and 100 percent.
   */
  constructor (value, clamped = true) {
    if (clamped) {
      this.#value = clamp(value / 100, 0, 1);
    } else {
      this.#value = value / 100;
    }
  }

  /**
   * Gets the decimal value of the Percent.
   *
   * @returns {number} The percentage value.
   */
  getValue () {
    return this.#value;
  }
}
