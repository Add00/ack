/* global describe, it , expect, beforeEach */
import { Ellipse } from '../../import/geometry.js';

describe('Ellipse', () => {
  let ellipse;

  beforeEach(() => {
    ellipse = new Ellipse(0, 0, 5, 3);
  });

  it('should be instantiated correctly', () => {
    expect(ellipse instanceof Ellipse).toBe(true);
    expect(ellipse.getX()).toBe(0);
    expect(ellipse.getY()).toBe(0);
    expect(ellipse.getRadiusX()).toBe(5);
    expect(ellipse.getRadiusY()).toBe(3);
  });

  it('should set and get horizontal radius correctly', () => {
    ellipse.setRadiusX(8);
    expect(ellipse.getRadiusX()).toBe(8);
  });

  it('should set and get vertical radius correctly', () => {
    ellipse.setRadiusY(6);
    expect(ellipse.getRadiusY()).toBe(6);
  });

  it('should set and get both horizontal and vertical radii correctly', () => {
    ellipse.setRadiusX(10);
    ellipse.setRadiusY(7);
    expect(ellipse.getRadiusX()).toBe(10);
    expect(ellipse.getRadiusY()).toBe(7);
  });

  it('should be instantiated with initial coordinates and radii', () => {
    expect(ellipse.getX()).toBe(0);
    expect(ellipse.getY()).toBe(0);
    expect(ellipse.getRadiusX()).toBe(5);
    expect(ellipse.getRadiusY()).toBe(3);
  });

  it('should be able to set coordinates and radii in the constructor', () => {
    const newEllipse = new Ellipse(2, 3, 6, 4);
    expect(newEllipse.getX()).toBe(2);
    expect(newEllipse.getY()).toBe(3);
    expect(newEllipse.getRadiusX()).toBe(6);
    expect(newEllipse.getRadiusY()).toBe(4);
  });

  it('should check collision correctly', () => {
    const otherEllipse1 = new Ellipse(8, 0, 5, 3); // Overlapping ellipses
    const otherEllipse2 = new Ellipse(20, 20, 5, 3); // Non-overlapping ellipses

    expect(ellipse.isColliding(otherEllipse1)).toBe(true);
    expect(ellipse.isColliding(otherEllipse2)).toBe(false);
  });
});
