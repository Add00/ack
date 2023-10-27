/* global describe, it , expect, beforeEach */
import { Vector3 } from '../../../import/containers.js';

describe('Vector3', () => {
  let vector;

  // Before each test, create a new Vector3 instance
  beforeEach(() => {
    vector = new Vector3(2, 3, 4);
  });

  // Test the constructor
  it('should create a Vector3 with specified x, y, and z components', () => {
    expect(vector.getX()).toEqual(2);
    expect(vector.getY()).toEqual(3);
    expect(vector.getZ()).toEqual(4);
  });

  // Test the setX, setY, and setZ methods
  it('should set the x, y, and z components', () => {
    vector.setX(5);
    vector.setY(6);
    vector.setZ(7);
    expect(vector.getX()).toEqual(5);
    expect(vector.getY()).toEqual(6);
    expect(vector.getZ()).toEqual(7);
  });

  // Test the set method
  it('should set all three components', () => {
    vector.set(8, 9, 10);
    expect(vector.getX()).toEqual(8);
    expect(vector.getY()).toEqual(9);
    expect(vector.getZ()).toEqual(10);
  });

  // Add more test cases for the remaining methods...

  // Test the clone method
  it('should create a new Vector3 with the same values', () => {
    const clonedVector = vector.clone();
    expect(clonedVector.getX()).toEqual(vector.getX());
    expect(clonedVector.getY()).toEqual(vector.getY());
    expect(clonedVector.getZ()).toEqual(vector.getZ());
  });

  // Test the magnitude method
  it('should calculate the magnitude of the vector', () => {
    const mag = vector.magnitude();
    expect(mag).toBeCloseTo(5.385, 3);
  });

  // Test the normalize method
  it('should normalize the vector', () => {
    vector.normalize();
    const mag = vector.magnitude();
    expect(mag).toBeCloseTo(1, 3);
  });

  // Test the distance method
  it('should calculate the distance between two vectors', () => {
    const otherVector = new Vector3(5, 7, 9);
    const distance = vector.distance(otherVector);
    expect(distance).toBeCloseTo(7.071, 3);
  });

  // Test the dot method
  it('should calculate the dot product of two vectors', () => {
    const otherVector = new Vector3(4, 6, 8);
    const dotProduct = vector.dot(otherVector);
    expect(dotProduct).toEqual(58);
  });
});
