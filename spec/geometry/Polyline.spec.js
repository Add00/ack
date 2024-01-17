/* global describe, it , expect, beforeEach, DOMPoint */
import { Polyline } from '../../import/geometry.js';

describe('Polyline', () => {
  let polyline;

  beforeEach(() => {
    // Assuming you have a Polyline instance for testing
    polyline = new Polyline(new DOMPoint(0, 0), new DOMPoint(5, 5), new DOMPoint(10, 0));
  });

  it('should create a polyline with correct points', () => {
    const points = polyline.getPoints();
    expect(points.length).toBe(3);
    expect(points[0].x).toBe(0);
    expect(points[0].y).toBe(0);
    expect(points[1].x).toBe(5);
    expect(points[1].y).toBe(5);
    expect(points[2].x).toBe(10);
    expect(points[2].y).toBe(0);
  });

  it('should clone the polyline correctly', () => {
    const clonedPolyline = polyline.clone();

    const originalPoints = polyline.getPoints();
    const clonedPoints = clonedPolyline.getPoints();

    expect(originalPoints.length).toBe(clonedPoints.length);
    for (let i = 0; i < originalPoints.length; i++) {
      expect(originalPoints[i].x).toBe(clonedPoints[i].x);
      expect(originalPoints[i].y).toBe(clonedPoints[i].y);
    }
  });

  // it('should handle collision detection (add your own tests based on your collision logic)', () => {});

  it('should set and get x and y properties correctly', () => {
    polyline.setX(10);
    polyline.setY(20);

    expect(polyline.getX()).toBe(10);
    expect(polyline.getY()).toBe(20);
  });
});
