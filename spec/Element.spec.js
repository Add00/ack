/* global describe, it , expect, beforeEach, jasmine */
import { Element } from '../import/general.js';

describe('Element Class', () => {
  let svg;
  let element;

  beforeEach(() => {
    if (!Element.isAutoTabIndexing()) {
      Element.toggleAutoTabIndexing();
    }

    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    element = new Element(svg);
  });

  it('should have a valid ID', () => {
    expect(element.getID()).toMatch(/^svg-\d+$/); // Check if ID matches the expected format
  });

  it('should set a custom ID', () => {
    element.setID('custom-id');
    expect(element.getID()).toBe('custom-id');
  });

  it('should have tabindex attribute when autoTabIndex is enabled', () => {
    element = new Element(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

    expect(element.Shape().hasAttribute('tabindex')).toBe(true);
  });

  it('should not have tabindex attribute when autoTabIndex is disabled', () => {
    Element.toggleAutoTabIndexing(); // Disable autoTabIndex
    element = new Element(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

    expect(element.Shape().hasAttribute('tabindex')).toBe(false);
  });

  it('should add and remove event listeners', () => {
    const eventType = 'click';
    const fn = jasmine.createSpy('eventHandler');

    // Add event listener
    element.addEventListener(eventType, fn);
    element.Shape().dispatchEvent(new Event(eventType));
    expect(fn).toHaveBeenCalled();

    // Remove event listener
    element.removeEventListener(eventType, fn);
    element.Shape().dispatchEvent(new Event(eventType));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should create a deep copy of the element', () => {
    const copy = element.clone();
    expect(copy).not.toBe(element); // Check if it's a different instance
    expect(copy.Shape()).not.toBe(element.Shape()); // Check if the underlying element is different
  });

  it('should nest elements within the current element', () => {
    const childElement = new Element(document.createElementNS('http://www.w3.org/2000/svg', 'rect'));
    element.nest(childElement);

    expect(element.Shape().children.length).toBe(1);
    expect(element.Shape().children[0]).toBe(childElement.Shape());
  });

  it('should animate the SVG element', () => {
    const keyframes = [{ opacity: 0 }, { opacity: 1 }];
    const options = { duration: 1000 };

    element.Animate(keyframes, options);

    const animations = svg.getAnimations();

    expect(animations.length).toBeGreaterThan(0);
  });
});
