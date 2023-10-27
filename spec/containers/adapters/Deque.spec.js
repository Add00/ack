/* global describe, it , expect, beforeEach */

import { Deque } from '../../../src/containers/adapters/Deque.js';

describe('Deque', () => {
  let deque;

  beforeEach(() => {
    deque = new Deque();
  });

  it('should initialize as an empty deque', () => {
    expect(deque.isEmpty()).toBe(true);
  });

  it('should add items to the front', () => {
    deque.addFront(1, 2, 3);
    expect(deque.length()).toBe(3);
    expect(deque.removeFront()).toBe(1);
  });

  it('should remove items from the front', () => {
    deque.addFront(1, 2, 3);
    expect(deque.removeFront()).toBe(1);
    expect(deque.length()).toBe(2);
  });

  it('should add items to the back', () => {
    deque.addBack(1, 2, 3);
    expect(deque.length()).toBe(3);
    expect(deque.removeBack()).toBe(3);
  });

  it('should remove items from the back', () => {
    deque.addBack(1, 2, 3);
    expect(deque.removeBack()).toBe(3);
    expect(deque.length()).toBe(2);
  });

  it('should check if the deque is empty', () => {
    expect(deque.isEmpty()).toBe(true);
    deque.addFront(1);
    expect(deque.isEmpty()).toBe(false);
  });

  it('should iterate forwards', () => {
    deque.addFront(1, 2, 3);
    const iterator = deque[Symbol.iterator]();
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe(3);
    expect(iterator.next().done).toBe(true);
  });

  it('should iterate backwards', () => {
    deque.addBack(1, 2, 3);
    const iterator = deque.backwards();
    expect(iterator.next().value).toBe(3);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().done).toBe(true);
  });
});
