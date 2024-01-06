/* global SVGElement */

/**
 * A generator function that yields unique IDs based on the provided tag names.
 * The function generates IDs in the format "tagname-1", "tagname-2", and so on.
 *
 * @generator
 * @function
 * @yields {string} A unique ID based on the provided tag name.
 */
function * defaultIDGenerator () {
  /**
   * Stores the counts of different tag names.
   *
   * @type {Map<string, number>}
   */
  const tags = new Map();
  let tagName = null;

  while (true) {
    if (!tags.has(tagName)) {
      tags.set(tagName, 0);
    } else {
      tags.set(tagName, tags.get(tagName) + 1);
    }

    tagName = yield `${tagName}-${tags.get(tagName)}`;
  }
}

/**
 * Wrapper class for an SVG Element.
 * Provides access to the underlying features of the Element.
 */
export class Element {
  // Static

  /**
   * A private counter to generate unique tabindex values.
   *
   * @private
   * @type {number}
   */
  static #count = 0;

  /**
   * A private boolean to check if the built in automatic tab numbering should be used.
   *
   * @private
   * @type {boolean}
   */
  static #autoTabIndex = true;

  /**
   * A private generator for creating unique IDs for elements.
   *
   * @private
   * @type {GeneratorFunction}
   */
  static #idGenerator = defaultIDGenerator();

  static {
    Element.#idGenerator.next();
  }

  /**
   * Change the ID generator function and optionally skip the first ID.
   *
   * @param {GeneratorFunction} generator - The new generator function for creating unique IDs.
   * @param {boolean} [skipFirst=false] - Whether to skip the first generated ID.
   */
  static setIDGenerator (generator, skipFirst = false) {
    Element.#idGenerator = generator();

    if (skipFirst) {
      Element.#idGenerator.next();
    }
  }

  /**
   * Checks if automatic tabindex generation is enabled.
   *
   * @returns {boolean} - `true` if auto tab indexing is enabled, `false` otherwise.
   */
  static isAutoTabIndexing () {
    return Element.#autoTabIndex;
  }

  /**
   * Toggles automatic tabindex generation on or off.
   *
   * @returns {Element} - The current Element instance.
   */
  static toggleAutoTabIndexing () {
    Element.#autoTabIndex = !Element.#autoTabIndex;

    return this;
  }

  /**
   * The underlying SVG element.
   *
   * @type {SVGElement}
   * @private
   */
  #element;

  /**
   * Creates a new Element instance.
   *
   * @param {string|SVGElement} element - The underlying SVG element to make.
   */
  constructor (element) {
    this.#element = element instanceof SVGElement
      ? element
      : document.createElementNS('http://www.w3.org/2000/svg', element);

    // Generate and set 'id' attribute
    if (!this.#element.hasAttribute('id')) {
      const id = Element.#idGenerator.next(element.tagName).value;

      this.#element.setAttribute('id', id);
    }

    // Generate and set 'tabindex' attribute if missing
    if (Element.#autoTabIndex && !this.#element.hasAttribute('tabindex')) {
      this.#element.setAttribute('tabindex', Element.#count);

      Element.#count++;
    }
  }

  // Event handlers

  /**
   * Adds an event listener to element.
   *
   * @param {string} eventType - The type of event to listen for.
   * @param {Function} fn - The event handler function.
   * @param {object} [options] - Optional event listener options.
   * @returns {Element} - The current Element instance.
   */
  addEventListener (eventType, fn, options = undefined) {
    this.Shape().addEventListener(eventType, fn, options);

    return this;
  }

  /**
   * Removes an event listener from the element. That was perviously added.
   *
   * @param {string} eventType - The type of event to listen for.
   * @param {Function} fn - The event handler function.
   * @param {object} options - Optional event listener options.
   * @returns {Element} - The current Element instance.
   */
  removeEventListener (eventType, fn, options = undefined) {
    this.Shape().removeEventListener(eventType, fn, options);

    return this;
  }

  // General events
  on = {
    abort: (fn, options) => this.addEventListener('abort', fn, options),
    error: (fn, options) => this.addEventListener('error', fn, options),
    load: (fn, options) => this.addEventListener('load', fn, options),
    resize: (fn, options) => this.addEventListener('resize', fn, options),
    scroll: (fn, options) => this.addEventListener('scroll', fn, options),
    unload: (fn, options) => this.addEventListener('unload', fn, options)
  };

  // Clipboard events
  onClipboard = {
    copy: (fn, options) => this.addEventListener('copy', fn, options),
    cut: (fn, options) => this.addEventListener('cut', fn, options),
    paste: (fn, options) => this.addEventListener('paste', fn, options)
  };

  // Composition events
  onComposition = {
    end: (fn, options) => this.addEventListener('compositionend', fn, options),
    start: (fn, options) => this.addEventListener('compositionstart', fn, options),
    update: (fn, options) => this.addEventListener('compositionupdate', fn, options)
  };

  // Focus events
  onFocus = {
    blur: (fn, options) => this.addEventListener('blur', fn, options),
    focus: (fn, options) => this.addEventListener('focus', fn, options),
    in: (fn, options) => this.addEventListener('focusin', fn, options),
    out: (fn, options) => this.addEventListener('focusout', fn, options)
  };

  // Fullscreen events
  onFullscreen = {
    change: (fn, options) => this.addEventListener('change', fn, options),
    error: (fn, options) => this.addEventListener('error', fn, options)
  };

  // Keyboard Events
  onKey = {
    down: (fn, options) => this.addEventListener('keydown', fn, options),
    up: (fn, options) => this.addEventListener('keyup', fn, options)
  };

  // Mouse Events
  onMouse = {
    auxiliaryClick: (fn, options) => this.addEventListener('auxclick', fn, options),
    click: (fn, options) => this.addEventListener('click', fn, options),
    doubleClick: (fn, options) => this.addEventListener('dblclick', fn, options),
    down: (fn, options) => this.addEventListener('mousedown', fn, options),
    enter: (fn, options) => this.addEventListener('mouseenter', fn, options),
    leave: (fn, options) => this.addEventListener('mouseleave', fn, options),
    out: (fn, options) => this.addEventListener('mouseout', fn, options),
    over: (fn, options) => this.addEventListener('mouseover', fn, options),
    up: (fn, options) => this.addEventListener('mouseup', fn, options)
  };

  // Touch events
  onTouch = {
    cancel: (fn, options) => this.addEventListener('touchcancel', fn, options),
    end: (fn, options) => this.addEventListener('touchend', fn, options),
    move: (fn, options) => this.addEventListener('touchmove', fn, options),
    start: (fn, options) => this.addEventListener('touchstart', fn, options)
  };

  // Accessors

  /**
   * Get a property value from the underlying SVG element.
   *
   * @private
   * @param {string} property - The name of the property to retrieve.
   * @returns {string|null} - The value of the property.
   */
  #get (property) {
    return this.Shape().getAttribute(property);
  }

  /**
   * Get a property value from the underlying SVG element and parse it as a number.
   *
   * @protected
   * @param {string} property - The name of the property to retrieve and parse.
   * @returns {number} - The parsed numeric value.
   */
  _getAsNumber (property) {
    return Number(this.#get(property));
  }

  /**
   * Get a property value from the underlying SVG element as a string.
   *
   * @protected
   * @param {string} property - The name of the property to retrieve as a string.
   * @returns {string} - The property value as a string.
   */
  _getAsString (property) {
    return this.#get(property);
  }

  /**
   * Check if the underlying SVG element has a specified attribute.
   *
   * @protected
   * @param {string} property - The name of the attribute to check.
   * @returns {boolean} - `true` if the attribute exists, otherwise `false`.
   */
  _has (property) {
    return this.Shape().hasAttribute(property);
  }

  /**
   * Set a property on the underlying SVG element.
   *
   * @protected
   * @param {string} property - The name of the property to set.
   * @param {string} value - The value to set for the property.
   */
  _set (property, value) {
    this.Shape().setAttribute(property, value);
  }

  /**
   * Get the ID of the Element.
   *
   * @returns {string} - The ID attribute value.
   */
  getID () {
    return this._getAsString('id');
  }

  /**
   * Set the ID of the SVG element.
   *
   * @param {string} id - The new ID value.
   */
  setID (id) {
    this._set('id', id);
  }

  // Methods

  /**
   * Nest one or more Elements within the current element.
   *
   * @param {...Element} elements - The Elements to nest within the current element.
   * @returns {Element} - The current Element instance.
   */
  nest (...elements) {
    elements.forEach(element => this.Shape().append(element.Shape()));

    return this;
  }

  /**
   * Create a deep copy of the current Element object.
   *
   * @returns {Element} A new Element object with the same properties.
   */
  clone () {
    return new Element(document.createElementNS('http://www.w3.org/2000/svg', this.Shape().tagName));
  }

  /**
   * Animate the SVG element.
   *
   * @param {Keyframe[]} keyframes - An array of keyframes.
   * @param {object} options - Animation options.
   * @returns {Element} - The current Element instance.
   */
  Animate (keyframes, options) {
    this.Shape().animate(keyframes, options);

    return this;
  }

  /**
   * Get the underlying SVG element.
   *
   * @returns {SVGElement} - The SVG element.
   */
  Shape () {
    return this.#element;
  }
}
