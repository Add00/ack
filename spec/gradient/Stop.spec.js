/* global describe, it , expect, beforeEach */
import { Stop } from '../../import/gradient.js';

describe('Stop', () => {
  let stop;

  beforeEach(() => {
    stop = new Stop();
  });

  it('should create an instance of Stop', () => {
    expect(stop instanceof Stop).toBe(true);
  });

  describe('setOffset and getOffset', () => {
    it('should set and get the offset', () => {
      stop.setOffset(0.5);
      expect(stop.getOffset()).toBe(0.5);
    });
  });

  describe('setColor and getColor', () => {
    it('should set and get the color', () => {
      stop.setColor('red');
      expect(stop.getColor()).toBe('red');
    });
  });

  describe('setOpacity and getOpacity', () => {
    it('should set and get the opacity', () => {
      stop.setOpacity(0.75);
      expect(stop.getOpacity()).toBe(0.75);
    });
  });
});
