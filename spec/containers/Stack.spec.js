/* global describe, it , expect, beforeEach */

import { Stack } from '../../src/containers/adapters/Stack.js';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack(1, 2, 3);
  });

  it('should initialize with items', () => {
    expect(stack.length()).toBe(3);
  });

  it('should push items onto the stack', () => {
    stack.push(4, 5);
    expect(stack.length()).toBe(5);
  });

  it('should pop items from the stack', () => {
    const poppedItem = stack.pop();
    expect(poppedItem).toBe(3);
    expect(stack.length()).toBe(2);
  });

  it('should peek at the top item without removing it', () => {
    const topItem = stack.peek();
    expect(topItem).toBe(3);
    expect(stack.length()).toBe(3);
  });

  it('should return the correct length of the stack', () => {
    expect(stack.length()).toBe(3);

    stack.push(4, 5);
    expect(stack.length()).toBe(5);

    stack.pop();
    expect(stack.length()).toBe(4);
  });

  it('should correctly check if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(false);

    stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });
});
