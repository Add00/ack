import { Adapter } from './Adapter.js';

export class Deque extends Adapter {
  #items;

  constructor () {
    super();

    this.#items = [];
  }

  addFront (...items) {
    this.#items.unshift(...items);

    return this;
  }

  removeFront () {
    return this.#items.shift();
  }

  addBack (...items) {
    this.#items.push(...items);

    return this;
  }

  removeBack () {
    return this.#items.pop();
  }

  peek () {
    return this.#items[0];
  }

  peekBack () {
    return this.#items[this.#items.length - 1];
  }

  length () {
    return this.#items.length;
  }

  isEmpty () {
    return this.length() === 0;
  }

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
