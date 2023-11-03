/* global describe, it , expect, beforeEach */
import { RadialGradient } from '../../import/gradient.js';

describe('RadialGradient', () => {
  let radialGradient;

  beforeEach(() => {
    radialGradient = new RadialGradient();
  });

  it('should create a RadialGradient with default values', () => {
    expect(radialGradient.getX()).toBe(0.5);
    expect(radialGradient.getY()).toBe(0.5);
    expect(radialGradient.getRadius()).toBe(0.5);
    expect(radialGradient.getFocusX()).toBe(0.5);
    expect(radialGradient.getFocusY()).toBe(0.5);
    expect(radialGradient.getFocusRadius()).toBe(0.5);
  });

  it('should set and get the x-coordinate of the gradient center', () => {
    radialGradient.setX(0.3);
    expect(radialGradient.getX()).toBe(0.3);
  });

  it('should set and get the y-coordinate of the gradient center', () => {
    radialGradient.setY(0.7);
    expect(radialGradient.getY()).toBe(0.7);
  });

  it('should set and get the radius of the gradient', () => {
    radialGradient.setRadius(0.4);
    expect(radialGradient.getRadius()).toBe(0.4);
  });

  it('should set and get the x-coordinate of the gradient focus point', () => {
    radialGradient.setFocusX(0.6);
    expect(radialGradient.getFocusX()).toBe(0.6);
  });

  it('should set and get the y-coordinate of the gradient focus point', () => {
    radialGradient.setFocusY(0.4);
    expect(radialGradient.getFocusY()).toBe(0.4);
  });

  it('should set and get the radius of the gradient focus point', () => {
    radialGradient.setFocusRadius(0.3);
    expect(radialGradient.getFocusRadius()).toBe(0.3);
  });
});
