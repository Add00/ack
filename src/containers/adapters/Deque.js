/** @namespace adapter */

import { Adapter } from './Adapter.js';

/**
 * Represents a double-ended queue (deque) data structure.
 *
 * @extends Adapter
 */
export class Deque extends Adapter {
  /**
   * The underlying array where elements are stored.
   * @private
   * @type {Array}
   */
  #items;

  /**
   * Creates a new Deque instance.
   *
   * @constructor Deque
   * @param {...any} items - Optional items to initialize the Deque with.
   */
  constructor (...items) {
    super();

    this.#items = [];
    this.addBack(...items);
  }

  addFront (...items) {
    this.#items.unshift(...items);

    return this;
  }

  removeFront () {
    return this.#items.shift();
  }

  /**
   * Adds new elements to the back of the Deque.
   * @param {...any} items - Elements to add to the back of the Deque.
   * @returns {Deque} The current Deque instance.
   */
  addBack (...items) {
    this.#items.push(...items);

    return this;
  }

  /**
   * Removes and returns the back element of the Deque.
   * @returns {any} The item at the back of the Deque.
   */
  removeBack () {
    return this.#items.pop();
  }

  /**
   * Returns the front element in the Deque without removing it.
   * @returns {any} The front element in the Deque.
   */
  peek () {
    return this.#items[0];
  }

  /**
   * Returns the back element in the Deque without removing it.
   * @returns {any} The back element in the Deque.
   */
  peekBack () {
    return this.#items[this.#items.length - 1];
  }

  /**
   * Returns the current size of the Deque.
   * @returns {number} The size of the Deque.
   */
  length () {
    return this.#items.length;
  }

  /**
   * Checks if the Deque is empty.
   * @returns {boolean} `true` if the Deque is empty, `false` otherwise.
   */
  isEmpty () {
    return this.length() === 0;
  }

  /**
   * Returns an iterator for the Deque, allowing for iteration from front to back.
   * @returns {Iterator<any>} An iterator object.
   */
  forwards () {
    let index = 0;
    return {
      next: () => {
        if (index < this.#items.length) {
          return { value: this.#items[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }

  /**
   * Returns an iterator for the Deque, allowing for iteration from back to front.
   * @returns {Iterator<any>} An iterator object.
   */
  backwards () {
    let index = this.#items.length - 1;
    return {
      next: () => {
        if (index >= 0) {
          return { value: this.#items[index--], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }

  [Symbol.iterator] () {
    return this.forwards();
  }
}
