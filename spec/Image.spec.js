/* global describe, it , expect, beforeEach */
import { Image } from '../import/general.js';

describe('Image Class', () => {
  let testImage;

  beforeEach(() => {
    testImage = new Image(10, 20, 100, 150, 'test.jpg', 'anonymous', 'async');
  });

  it('should create an instance of Image', () => {
    expect(testImage instanceof Image).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    expect(testImage.getX()).toEqual(10);
    expect(testImage.getY()).toEqual(20);
    expect(testImage.getWidth()).toEqual(100);
    expect(testImage.getHeight()).toEqual(150);
    expect(testImage.getHref()).toEqual('test.jpg');
    expect(testImage.getCrossOrigin()).toEqual('anonymous');
    expect(testImage.getDecoding()).toEqual('async');
  });

  // Test cases for the setHref method
  it('should set the href property', () => {
    const newHref = 'new-image.jpg';
    testImage.setHref(newHref);
    expect(testImage.getHref()).toEqual(newHref);
  });

  // Test cases for the setCrossOrigin method
  it('should set the crossOrigin property', () => {
    const newCrossOrigin = 'use-credentials';
    testImage.setCrossOrigin(newCrossOrigin);
    expect(testImage.getCrossOrigin()).toEqual(newCrossOrigin);
  });

  // Test cases for the setDecoding method
  it('should set the decoding property', () => {
    const newDecoding = 'sync';
    testImage.setDecoding(newDecoding);
    expect(testImage.getDecoding()).toEqual(newDecoding);
  });
});
