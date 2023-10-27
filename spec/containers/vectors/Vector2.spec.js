/* global describe, it , expect, beforeEach */
import { Vector2 } from '../../../import/containers.js';

describe('Vector2', () => {
  let vector;

  // Before each test, create a new Vector2 instance
  beforeEach(() => {
    vector = new Vector2(2, 3);
  });

  // Test the constructor
  it('should create a Vector2 with specified x and y components', () => {
    expect(vector.getX()).toEqual(2);
    expect(vector.getY()).toEqual(3);
  });

  // Test the setX and setY methods
  it('should set the x and y components', () => {
    vector.setX(5);
    vector.setY(6);
    expect(vector.getX()).toEqual(5);
    expect(vector.getY()).toEqual(6);
  });

  // Test the set method
  it('should set both x and y components', () => {
    vector.set(7, 8);
    expect(vector.getX()).toEqual(7);
    expect(vector.getY()).toEqual(8);
  });

  // Add more test cases for the remaining methods...

  // Test the clone method
  it('should create a new Vector2 with the same values', () => {
    const clonedVector = vector.clone();
    expect(clonedVector.getX()).toEqual(vector.getX());
    expect(clonedVector.getY()).toEqual(vector.getY());
  });

  // Test the magnitude method
  it('should calculate the magnitude of the vector', () => {
    const mag = vector.magnitude();
    expect(mag).toBeCloseTo(3.6055, 4);
  });

  // Test the normalize method
  it('should normalize the vector', () => {
    vector.normalize();
    const mag = vector.magnitude();
    expect(mag).toBeCloseTo(1, 4);
  });

  // Test the distance method
  it('should calculate the distance between two vectors', () => {
    const otherVector = new Vector2(5, 7);
    const distance = vector.distance(otherVector);
    expect(distance).toBeCloseTo(5, 4);
  });

  // Test the dot method
  it('should calculate the dot product of two vectors', () => {
    const otherVector = new Vector2(4, 6);
    const dotProduct = vector.dot(otherVector);
    expect(dotProduct).toEqual(26);
  });

  // Add more test cases for the remaining methods...
});
