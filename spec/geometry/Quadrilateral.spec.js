/* global describe, it , expect, beforeEach */
import { Quadrilateral } from '../../src/geometry/Quadrilateral.js';

describe('Quadrilateral', () => {
  let quadrilateral;

  beforeEach(() => {
    quadrilateral = new Quadrilateral(document.createElementNS('http://www.w3.org/2000/svg', 'rect'));
  });

  it('should set and get x-coordinate correctly', () => {
    quadrilateral.setX(10);
    expect(quadrilateral.getX()).toBe(10);

    quadrilateral.setX(20);
    expect(quadrilateral.getX()).toBe(20);
  });

  it('should set and get y-coordinate correctly', () => {
    quadrilateral.setY(30);
    expect(quadrilateral.getY()).toBe(30);

    quadrilateral.setY(40);
    expect(quadrilateral.getY()).toBe(40);
  });

  it('should set and get width correctly', () => {
    quadrilateral.setWidth(50);
    expect(quadrilateral.getWidth()).toBe(50);

    quadrilateral.setWidth(60);
    expect(quadrilateral.getWidth()).toBe(60);
  });

  it('should set and get height correctly', () => {
    quadrilateral.setHeight(70);
    expect(quadrilateral.getHeight()).toBe(70);

    quadrilateral.setHeight(80);
    expect(quadrilateral.getHeight()).toBe(80);
  });

  // Add more tests as needed for your specific implementation
});
