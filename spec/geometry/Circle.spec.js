/* global describe, it , expect, beforeEach */
import { Circle } from '../../import/geometry.js';
import { Vector3 } from '../../import/containers.js';

describe('Circle', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle(0, 0, 5);
  });

  it('should be instantiated correctly', () => {
    expect(circle instanceof Circle).toBe(true);
    expect(circle.getX()).toBe(0);
    expect(circle.getY()).toBe(0);
    expect(circle.getRadius()).toBe(5);
  });

  it('should set and get radius correctly', () => {
    circle.setRadius(10);
    expect(circle.getRadius()).toBe(10);
  });

  it('should create a circle from coordinates and radius', () => {
    const newCircle = Circle.from(3, 4, 7);
    expect(newCircle.getX()).toBe(3);
    expect(newCircle.getY()).toBe(4);
    expect(newCircle.getRadius()).toBe(7);
  });

  it('should create a circle from Vector3', () => {
    const vector = new Vector3(1, 2, 3);
    const newCircle = Circle.fromVector3(vector);
    expect(newCircle.getX()).toBe(1);
    expect(newCircle.getY()).toBe(2);
    expect(newCircle.getRadius()).toBe(3);
  });

  it('should create a circle from coordinates and diameter', () => {
    const newCircle = Circle.fromDiameter(2, 5, 8);
    expect(newCircle.getX()).toBe(2);
    expect(newCircle.getY()).toBe(5);
    expect(newCircle.getRadius()).toBe(4);
  });

  it('should clone the circle correctly', () => {
    const clonedCircle = circle.clone();
    expect(clonedCircle.getX()).toBe(0);
    expect(clonedCircle.getY()).toBe(0);
    expect(clonedCircle.getRadius()).toBe(5);
  });

  it('should check collision correctly', () => {
    const otherCircle1 = new Circle(8, 0, 5); // Overlapping circles
    const otherCircle2 = new Circle(20, 20, 5); // Non-overlapping circles

    expect(circle.isColliding(otherCircle1)).toBe(true);
    expect(circle.isColliding(otherCircle2)).toBe(false);
  });
});
