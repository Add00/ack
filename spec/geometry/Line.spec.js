/* global describe, it , expect, beforeEach */
import { Line } from '../../import/geometry.js';

describe('Line', () => {
  let line;

  beforeEach(() => {
    line = new Line(0, 0, 5, 5);
  });

  it('should be instantiated correctly', () => {
    expect(line instanceof Line).toBe(true);
    expect(line.getX1()).toBe(0);
    expect(line.getY1()).toBe(0);
    expect(line.getX2()).toBe(5);
    expect(line.getY2()).toBe(5);
  });

  it('should set and get starting point coordinates correctly', () => {
    line.setX1(2);
    line.setY1(3);
    expect(line.getX1()).toBe(2);
    expect(line.getY1()).toBe(3);
  });

  it('should set and get ending point coordinates correctly', () => {
    line.setX2(8);
    line.setY2(10);
    expect(line.getX2()).toBe(8);
    expect(line.getY2()).toBe(10);
  });

  it('should set and get both starting and ending point coordinates correctly', () => {
    line.setX1(2);
    line.setY1(3);
    line.setX2(8);
    line.setY2(10);
    expect(line.getX1()).toBe(2);
    expect(line.getY1()).toBe(3);
    expect(line.getX2()).toBe(8);
    expect(line.getY2()).toBe(10);
  });

  it('should clone the line correctly', () => {
    const clonedLine = line.clone();
    expect(clonedLine.getX1()).toBe(0);
    expect(clonedLine.getY1()).toBe(0);
    expect(clonedLine.getX2()).toBe(5);
    expect(clonedLine.getY2()).toBe(5);
  });

//   it('should not have a collision method yet', () => {
//     expect(line.isColliding).toBeUndefined();
//   });
});
