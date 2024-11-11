/**
 * Represents the CSS 'pointer-events' property values as an encapsulated class.
 * This class allows you to work with 'pointer-events' property values in a more
 * structured way.
 */
export class PointerEvents {
  /**
   * Creates a new PointerEvents instance with the specified value.
   *
   * @constructor PointerEvents
   * @param {string} value - The 'pointer-events' property value.
   */
  constructor (value) {
    this.value = value;
  }

  static get AUTO () {
    return new PointerEvents('auto');
  }

  static get NONE () {
    return new PointerEvents('none');
  }

  static get VISIBLE_PAINTED () {
    return new PointerEvents('visiblePainted');
  }

  static get VISIBLE_FILL () {
    return new PointerEvents('visibleFill');
  }

  static get VISIBLE_STROKE () {
    return new PointerEvents('visibleStroke');
  }

  static get VISIBLE () {
    return new PointerEvents('visible');
  }

  static get PAINTED () {
    return new PointerEvents('painted');
  }

  static get FILL () {
    return new PointerEvents('fill');
  }

  static get STROKE () {
    return new PointerEvents('stroke');
  }

  static get ALL () {
    return new PointerEvents('all');
  }

  static get INHERIT () {
    return new PointerEvents('inherit');
  }

  static get INITIAL () {
    return new PointerEvents('initial');
  }

  static get REVERT () {
    return new PointerEvents('revert');
  }

  static get REVERT_LAYER () {
    return new PointerEvents('revert-layer');
  }

  static get UNSET () {
    return new PointerEvents('unset');
  }

  toString () {
    return this.value;
  }
}
