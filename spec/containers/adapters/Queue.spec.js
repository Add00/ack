/* global describe, it , expect, beforeEach */

import { Queue } from '../../../src/containers/adapters/Queue.js';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should be empty when created', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length()).toBe(0);
  });

  it('should enqueue items', () => {
    queue.enqueue(1);
    queue.enqueue(2, 3);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.length()).toBe(3);
  });

  it('should dequeue items in the correct order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);

    expect(queue.isEmpty()).toBe(true);
    expect(queue.length()).toBe(0);
  });

  it('should peek at the front item without removing it', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.length()).toBe(2);
  });

  it('should handle a mix of enqueue, dequeue, and peek operations', () => {
    queue.enqueue(1, 2, 3);

    expect(queue.peek()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.length()).toBe(2);

    queue.enqueue(4, 5);

    expect(queue.peek()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.length()).toBe(1);

    expect(queue.peek()).toBe(5);
    expect(queue.dequeue()).toBe(5);

    expect(queue.isEmpty()).toBe(true);
  });
});
