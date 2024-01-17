/* global describe, it , expect, beforeEach, DOMPoint */
import { Poly } from '../../src/geometry/Poly.js';

describe('Poly', () => {
  let poly;

  beforeEach(() => {
    poly = new Poly(document.createElementNS('http://www.w3.org/2000/svg', 'polygon'));
  });

  it('should add points correctly', () => {
    poly.addPoint(new DOMPoint(0, 0), new DOMPoint(5, 5));

    const points = poly.getPoints();

    expect(points.length).toBe(2);
    expect(points[0].x).toBe(0);
    expect(points[0].y).toBe(0);
    expect(points[1].x).toBe(5);
    expect(points[1].y).toBe(5);
  });

  it('should get points correctly', () => {
    const points = poly.getPoints();
    expect(points).toEqual([]);

    poly.addPoint(new DOMPoint(1, 1));
    poly.addPoint(new DOMPoint(2, 2));

    const updatedPoints = poly.getPoints();
    expect(updatedPoints.length).toBe(2);
    expect(updatedPoints[0].x).toBe(1);
    expect(updatedPoints[0].y).toBe(1);
    expect(updatedPoints[1].x).toBe(2);
    expect(updatedPoints[1].y).toBe(2);
  });

  it('should get point at a specified index correctly', () => {
    poly.addPoint(new DOMPoint(1, 1), new DOMPoint(2, 2), new DOMPoint(3, 3));

    const point = poly.getPointAt(1);
    expect(point.x).toBe(2);
    expect(point.y).toBe(2);
  });

  it('should update point at a specified index correctly', () => {
    poly.addPoint(new DOMPoint(1, 1), new DOMPoint(2, 2), new DOMPoint(3, 3));

    poly.updatePointAt(1, point => {
      point.x += 1;
      point.y += 1;
    });

    const updatedPoints = poly.getPoints();
    expect(updatedPoints[1].x).toBe(3);
    expect(updatedPoints[1].y).toBe(3);
  });

  it('should update points correctly based on filter', () => {
    poly.addPoint(new DOMPoint(1, 1), new DOMPoint(2, 2), new DOMPoint(3, 3));

    poly.updatePoints(
      (point, index) => {
        point.x += 1;
        point.y += 1;
      },
      (_, index) => index % 2 === 0
    );

    const updatedPoints = poly.getPoints();
    expect(updatedPoints[0].x).toBe(2);
    expect(updatedPoints[0].y).toBe(2);
    expect(updatedPoints[1].x).toBe(2);
    expect(updatedPoints[1].y).toBe(2);
    expect(updatedPoints[2].x).toBe(4);
    expect(updatedPoints[2].y).toBe(4);
  });

  it('should remove point at a specified index correctly', () => {
    poly.addPoint(new DOMPoint(1, 1), new DOMPoint(2, 2), new DOMPoint(3, 3));

    const removedPoint = poly.removePointAt(1);

    expect(removedPoint).not.toBe(undefined);
    expect(removedPoint.x).toBe(2);
    expect(removedPoint.y).toBe(2);

    const remainingPoints = poly.getPoints();
    expect(remainingPoints.length).toBe(2);
    expect(remainingPoints[0].x).toBe(1);
    expect(remainingPoints[0].y).toBe(1);
    expect(remainingPoints[1].x).toBe(3);
    expect(remainingPoints[1].y).toBe(3);
  });

  it('should clear points correctly', () => {
    poly.addPoint(new DOMPoint(1, 1), new DOMPoint(2, 2), new DOMPoint(3, 3));

    poly.clear();

    const clearedPoints = poly.getPoints();
    expect(clearedPoints.length).toBe(0);
  });
});
