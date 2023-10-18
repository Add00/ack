import { Adapter } from './Adapter.js';

export class Queue extends Adapter {
  #items;

  constructor (...items) {
    super();

    this.#items = [];
    this.enqueue(...items);
  }

  enqueue (...items) {
    this.#items.push(...items);

    return this;
  }

  dequeue () {
    return this.#items.shift();
  }

  peek () {
    return this.#items[0];
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
        if (index < this.items.length) {
          return { value: this.items[index++], done: false };
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
