/** @namespace adapter */

import { Adapter } from './Adapter.js';

/**
 * Represents a stack data structure, which follows the Last-In, First-Out (LIFO) principle.
 *
 * @class
 * @extends Adapter
 */
export class Stack extends Adapter {
  /**
   * The underlying array where elements are stored.
   * @private
   * @type {Array}
   */
  #items;

  /**
   * Creates a new Stack instance.
   *
   * @constructor Stack
   * @param {...any} items - Optional items to initialize the Stack with.
   */
  constructor (...items) {
    super();

    this.#items = [];
    this.push(...items);
  }

  /**
   * Adds new elements to the top of the Stack.
   * @param {...any} items - Elements to add to the top of the Stack.
   * @returns {Stack} The current Stack instance.
   */
  push (...items) {
    this.#items.push(...items);

    return this;
  }

  /**
   * Removes and returns the top element of the Stack.
   * @returns {any} The item at the top of the Stack.
   */
  pop () {
    return this.#items.pop();
  }

  /**
   * Returns the top element in the Stack without removing it.
   * @returns {any} The top element in the Stack.
   */
  peek () {
    return this.#items[this.#items.length - 1];
  }

  /**
   * Returns the current size of the Stack.
   * @returns {number} The size of the Stack.
   */
  length () {
    return this.#items.length;
  }

  /**
   * Checks if the Stack is empty.
   * @returns {boolean} `true` if the Stack is empty, `false` otherwise.
   */
  isEmpty () {
    return this.length() === 0;
  }

  /**
   * Returns an iterator for the Stack, allowing for iteration from top to bottom.
   * @returns {Iterator} An iterator object.
   */
  forwards () {
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
