/* global describe, it , expect, beforeEach, DOMPoint */
import { Polygon } from '../../import/geometry.js';

describe('Polygon', () => {
  let polygon;

  beforeEach(() => {
    polygon = new Polygon(new DOMPoint(0, 0), new DOMPoint(5, 5), new DOMPoint(10, 0));
  });

  it('should create a polygon with correct points', () => {
    const points = polygon.getPoints();
    expect(points.length).toBe(3);
    expect(points[0].x).toBe(0);
    expect(points[0].y).toBe(0);
    expect(points[1].x).toBe(5);
    expect(points[1].y).toBe(5);
    expect(points[2].x).toBe(10);
    expect(points[2].y).toBe(0);
  });

  it('should clone the polygon correctly', () => {
    const clonedPolygon = polygon.clone();

    const originalPoints = polygon.getPoints();
    const clonedPoints = clonedPolygon.getPoints();

    expect(originalPoints.length).toBe(clonedPoints.length);
    for (let i = 0; i < originalPoints.length; i++) {
      expect(originalPoints[i].x).toBe(clonedPoints[i].x);
      expect(originalPoints[i].y).toBe(clonedPoints[i].y);
    }
  });

//   it('should handle collision detection', () => {});
});
