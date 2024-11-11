/** @namespace adapter */

/**
 * @interface
 */
export class Adapter {
  /**
   * @abstract
   */
  peek () {
    throw new Error('unimplemented');
  }

  /**
   * @abstract
   */
  length () {
    throw new Error('unimplemented');
  }

  /**
   * @abstract
   */
  isEmpty () {
    throw new Error('unimplemented');
  }

  /**
   * @abstract
   */
  forwards () {
    throw new Error('unimplemented');
  }

  [Symbol.iterator] () {
    throw new Error('unimplemented');
  }
}
