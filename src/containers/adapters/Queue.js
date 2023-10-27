/** @namespace adapter */

import { Adapter } from './Adapter.js';

/**
 * Represents a queue data structure, which follows the First-In, First-Out (FIFO) principle.
 * @extends Adapter
 */
export class Queue extends Adapter {
  /**
   * The underlying array where elements are stored.
   * @private
   * @type {Array}
   */
  #items;

  /**
   * Creates a new Queue instance.
   * @param {...any} items - Optional items to initialize the Queue with.
   */
  constructor (...items) {
    super();

    this.#items = [];
    this.enqueue(...items);
  }

  /**
   * Adds new elements to the back of the Queue.
   * @param {...any} items - Elements to add to the back of the Queue.
   * @returns {Queue} The current Queue instance.
   */
  enqueue (...items) {
    this.#items.push(...items);

    return this;
  }

  /**
   * Removes and returns the front element of the Queue.
   * @returns {any} The item at the front of the Queue.
   */
  dequeue () {
    return this.#items.shift();
  }

  /**
   * Returns the front element in the Queue without removing it.
   * @returns {any} The front element in the Queue.
   */
  peek () {
    return this.#items[0];
  }

  /**
   * Returns the current size of the Queue.
   * @returns {number} The size of the Queue.
   */
  length () {
    return this.#items.length;
  }

  /**
   * Checks if the Queue is empty.
   * @returns {boolean} `true` if the Queue is empty, `false` otherwise.
   */
  isEmpty () {
    return this.length() === 0;
  }

  /**
   * Returns an iterator for the Queue, allowing for iteration from front to back.
   * @returns {Iterator} An iterator object.
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
   * Symbol.iterator method to support iterable behavior.
   * @returns {Iterator} The `forwards()` iterator.
   */
  [Symbol.iterator] () {
    return this.forwards();
  }
}
