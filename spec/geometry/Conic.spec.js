/* global describe, it , expect, beforeEach */
import { Conic } from '../../src/geometry/Conic.js';

describe('Conic', () => {
  let conic;

  beforeEach(() => {
    conic = new Conic(document.createElementNS('http://www.w3.org/2000/svg', 'ellipse'));
  });

  it('should set and get x-coordinate correctly', () => {
    conic.setX(10);
    expect(conic.getX()).toBe(10);
  });

  it('should set and get y-coordinate correctly', () => {
    conic.setY(20);
    expect(conic.getY()).toBe(20);
  });

  it('should set and get both x and y coordinates correctly', () => {
    conic.setX(15);
    conic.setY(25);
    expect(conic.getX()).toBe(15);
    expect(conic.getY()).toBe(25);
  });

  it('should be instantiated with initial coordinates (0, 0)', () => {
    expect(conic.getX()).toBe(0);
    expect(conic.getY()).toBe(0);
  });
});
