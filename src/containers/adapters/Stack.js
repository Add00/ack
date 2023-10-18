import { Adapter } from './Adapter.js';

export class Stack extends Adapter {
  #items;

  constructor (...items) {
    super();

    this.#items = [];
    this.push(...items);
  }

  push (...items) {
    this.#items.push(...items);

    return this;
  }

  pop () {
    return this.#items.pop();
  }

  peek () {
    return this.#items[this.#items.length - 1];
  }

  length () {
    return this.#items.length;
  }

  isEmpty () {
    return this.length() === 0;
  }

  forwards () {
    let index = this.items.length - 1;
    return {
      next: () => {
        if (index >= 0) {
          return { value: this.items[index--], done: false };
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
