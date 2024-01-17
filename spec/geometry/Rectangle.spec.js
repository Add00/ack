/* global describe, it , expect, beforeEach */
import { Rectangle } from '../../import/geometry.js';
import { Vector2 } from '../../import/containers.js';

describe('Rectangle', () => {
  let rectangle;

  beforeEach(() => {
    rectangle = new Rectangle(0, 0, 10, 20, 2, 3);
  });

  it('should be instantiated correctly', () => {
    expect(rectangle instanceof Rectangle).toBe(true);
    expect(rectangle.getX()).toBe(0);
    expect(rectangle.getY()).toBe(0);
    expect(rectangle.getWidth()).toBe(10);
    expect(rectangle.getHeight()).toBe(20);
    expect(rectangle.getCornerRadiusX()).toBe(2);
    expect(rectangle.getCornerRadiusY()).toBe(3);
  });

  it('should set and get x-axis corner radius correctly', () => {
    rectangle.setCornerRadiusX(5);
    expect(rectangle.getCornerRadiusX()).toBe(5);
  });

  it('should set and get y-axis corner radius correctly', () => {
    rectangle.setCornerRadiusY(8);
    expect(rectangle.getCornerRadiusY()).toBe(8);
  });

  it('should set and get both x-axis and y-axis corner radii correctly', () => {
    rectangle.setCornerRadiusX(5);
    rectangle.setCornerRadiusY(8);
    expect(rectangle.getCornerRadiusX()).toBe(5);
    expect(rectangle.getCornerRadiusY()).toBe(8);
  });

  it('should set and get size using Vector2 correctly', () => {
    const size = new Vector2(15, 25);
    rectangle.setSize(size);
    expect(rectangle.getWidth()).toBe(15);
    expect(rectangle.getHeight()).toBe(25);
  });

  it('should set and get position using Vector2 correctly', () => {
    const position = new Vector2(5, 10);
    rectangle.setPosition(position);
    expect(rectangle.getX()).toBe(5);
    expect(rectangle.getY()).toBe(10);
  });

  it('should clone the rectangle correctly', () => {
    const clonedRectangle = rectangle.clone();
    expect(clonedRectangle.getX()).toBe(0);
    expect(clonedRectangle.getY()).toBe(0);
    expect(clonedRectangle.getWidth()).toBe(10);
    expect(clonedRectangle.getHeight()).toBe(20);
    expect(clonedRectangle.getCornerRadiusX()).toBe(2);
    expect(clonedRectangle.getCornerRadiusY()).toBe(3);
  });

  it('should check collision with another rectangle correctly', () => {
    const overlappingRectangle = new Rectangle(5, 10, 15, 25, 1, 2);
    const nonOverlappingRectangle = new Rectangle(15, 30, 10, 15, 1, 2);

    expect(rectangle.isColliding(overlappingRectangle)).toBe(true);
    expect(rectangle.isColliding(nonOverlappingRectangle)).toBe(false);
  });
});
