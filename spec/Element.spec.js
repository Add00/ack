/* global describe, it , expect, beforeEach, afterEach */
import { Element } from '../import/general.js';

describe('Element', () => {
  let svgElement;
  let element;

  beforeEach(() => {
    // Create a dummy SVG element for testing
    svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    element = new Element(svgElement);
  });

  afterEach(() => {
    // Clean up after each test
    element = null;
    svgElement = null;
  });

  it('should create a new Element instance', () => {
    expect(element).toBeDefined();
    expect(element instanceof Element).toBe(true);
  });

  it('should generate and set an ID attribute if missing', () => {
    const tagName = svgElement.tagName;
    const expectedId = `${tagName}-0`;

    console.log(element);

    expect(element.getID()).toBe(expectedId);
  });

  it('should set the ID of the SVG element', () => {
    const newId = 'new-id';
    element.setID(newId);

    expect(element.getID()).toBe(newId);
  });

  it('should add and remove event listeners', () => {
    let eventCount = 0;

    const eventHandler = () => {
      eventCount++;
    };

    element.addEventListener('click', eventHandler);
    svgElement.dispatchEvent(new Event('click'));
    expect(eventCount).toBe(1);

    element.removeEventListener('click', eventHandler);
    svgElement.dispatchEvent(new Event('click'));
    expect(eventCount).toBe(1); // Event listener should be removed, count remains the same
  });

  it('should toggle automatic tabindex generation on and off', () => {
    expect(Element.isAutoTabIndexing()).toBe(true);

    Element.toggleAutoTabIndexing();
    expect(Element.isAutoTabIndexing()).toBe(false);

    Element.toggleAutoTabIndexing();
    expect(Element.isAutoTabIndexing()).toBe(true);
  });

  it('should nest elements within the current element', () => {
    const nestedElement = new Element(document.createElementNS('http://www.w3.org/2000/svg', 'circle'));

    element.nest(nestedElement);

    expect(svgElement.contains(nestedElement.Shape())).toBe(true);
  });

  it('should create a deep copy of the current Element object', () => {
    const clonedElement = element.clone();
    expect(clonedElement instanceof Element).toBe(true);
    expect(clonedElement.Shape()).not.toBe(element.Shape()); // Not the same instance
  });

  it('should animate the SVG element', () => {
    const keyframes = [{ opacity: 0 }, { opacity: 1 }];
    const options = { duration: 1000 };

    element.Animate(keyframes, options);

    // Check that the animation was applied to the SVG element
    const animations = svgElement.getAnimations();
    expect(animations.length).toBeGreaterThan(0);
  });
});
