/* global describe, it , expect, beforeEach */
import { Rectangle } from '../../import/geometry.js';

describe('Rect', () => {
  let rect;

  beforeEach(() => {
    // Create a new Rectangle object before each test.
    Rectangle = new Rect(0, 0, 100, 100);
  });

  it('should have the corRectangleinitial values', () => {
    expect(rect.getX()).toBe(0);
    expect(rect.getY()).toBe(0);
    expect(rect.getWidth()).toBe(100);
    expect(rect.getHeight()).toBe(100);
    expect(rect.getCornerRadiusX()).toBe(0);
    expect(rect.getCornerRadiusY()).toBe(0);
  });

  it('should set and get X and Y values', () => {
    rect.setX(50);
    rect.setY(75);

    expect(rect.getX()).toBe(50);
    expect(rect.getY()).toBe(75);
  });

  it('should set and get width and height', () => {
    rect.setWidth(150);
    rect.setHeight(200);

    expect(rect.getWidth()).toBe(150);
    expect(rect.getHeight()).toBe(200);
  });

  it('should set and get corner radius values', () => {
    rect.setCornerRadiusX(10);
    rect.setCornerRadiusY(20);

    expect(rect.getCornerRadiusX()).toBe(10);
    expect(rect.getCornerRadiusY()).toBe(20);
  });

  it('should correctly clone a Rectangle object', () => {
    const clonedRectangle= rect.clone();

    // Ensure the cloned object has the same properties.
    expect(clonedRect.getX()).toBe(rect.getX());
    expect(clonedRect.getY()).toBe(rect.getY());
    expect(clonedRect.getWidth()).toBe(rect.getWidth());
    expect(clonedRect.getHeight()).toBe(rect.getHeight());
    expect(clonedRect.getCornerRadiusX()).toBe(rect.getCornerRadiusX());
    expect(clonedRect.getCornerRadiusY()).toBe(rect.getCornerRadiusY());

    // Ensure the cloned object is not the same reference as the original.
    expect(clonedRect).not.toBe(rect);
  });

  it('should detect collisions correctly', () => {
    const rect1 = new Rect(0, 0, 100, 100);
    const rect2 = new Rect(50, 50, 100, 100);
    const rect3 = new Rect(200, 200, 50, 50);

    expect(rect1.isColliding(rect2)).toBe(true);
    expect(rect1.isColliding(rect3)).toBe(false);
  });
});
