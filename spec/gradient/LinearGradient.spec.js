/* global describe, it , expect, beforeEach */
import { LinearGradient } from '../../import/gradient.js';

describe('LinearGradient', () => {
  let linearGradient;

  beforeEach(() => {
    linearGradient = new LinearGradient();
  });

  it('should create an instance of LinearGradient', () => {
    expect(linearGradient instanceof LinearGradient).toBe(true);
  });

  describe('setX1 and getX1', () => {
    it('should set and get the x1 coordinate', () => {
      linearGradient.setX1(10);
      expect(linearGradient.getX1()).toBe(10);
    });

    it('should return the current instance when setting x1', () => {
      const result = linearGradient.setX1(15);
      expect(result).toBe(linearGradient);
    });
  });

  describe('setX2 and getX2', () => {
    it('should set and get the x2 coordinate', () => {
      linearGradient.setX2(20);
      expect(linearGradient.getX2()).toBe(20);
    });

    it('should return the current instance when setting x2', () => {
      const result = linearGradient.setX2(25);
      expect(result).toBe(linearGradient);
    });
  });

  describe('setY1 and getY1', () => {
    it('should set and get the y1 coordinate', () => {
      linearGradient.setY1(30);
      expect(linearGradient.getY1()).toBe(30);
    });

    it('should return the current instance when setting y1', () => {
      const result = linearGradient.setY1(35);
      expect(result).toBe(linearGradient);
    });
  });

  describe('setY2 and getY2', () => {
    it('should set and get the y2 coordinate', () => {
      linearGradient.setY2(40);
      expect(linearGradient.getY2()).toBe(40);
    });

    it('should return the current instance when setting y2', () => {
      const result = linearGradient.setY2(45);
      expect(result).toBe(linearGradient);
    });
  });
});
