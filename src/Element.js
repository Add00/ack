export class Element {
  /**
     * A private map to store the counts of different tag names.
     * @type {Map<string, number>}
     * @private
     */
  static #tags = new Map();

  /**
     * A private counter to generate unique tabindex values.
     * @type {number}
     * @private
     */
  static #count = 0;

  /**
     * The underlying SVG element.
     * @type {SVGElement}
     * @private
     */
  #element;

  /**
     * Creates a new Element instance.
     * @param {SVGElement} element - The underlying SVG element to wrap.
     */
  constructor (element) {
    this.#element = element;

    // Generate and set 'id' attribute if missing
    if (!this.#element.hasAttribute('id')) {
      const tagName = this.#element.tagName;

      if (!Element.#tags.has(tagName)) {
        Element.#tags.set(tagName, 0);
      } else {
        Element.#tags.set(tagName, Element.#tags.get(tagName) + 1);
      }

      this.#element.setAttribute('id', `${tagName}-${Element.#tags.get(tagName)}`);
    }

    // Generate and set 'tabindex' attribute if missing
    if (!this.#element.hasAttribute('tabindex')) {
      this.#element.setAttribute('tabindex', Element.#count);

      Element.#count++;
    }
  }

  // Event handlers

  addEventListener (eventType, fn, options = undefined) {
    this.Shape().addEventListener(eventType, fn, options);
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
     * @protected
     * @param {string} property - The name of the property to retrieve.
     * @returns {string|null} - The value of the property.
     */
  _get (property) {
    return this.Shape().getAttribute(property);
  }

  /**
     * Get a property value from the underlying SVG element and parse it as a number.
     * @protected
     * @param {string} property - The name of the property to retrieve and parse.
     * @returns {number} - The parsed numeric value.
     */
  _getAsNumber (property) {
    return parseFloat(this._get(property));
  }

  /**
     * Get a property value from the underlying SVG element as a string.
     * @protected
     * @param {string} property - The name of the property to retrieve as a string.
     * @returns {string} - The property value as a string.
     */
  _getAsString (property) {
    return _get(property);
  }

  /**
     * Check if the underlying SVG element has a specified attribute.
     * @protected
     * @param {string} property - The name of the attribute to check.
     * @returns {boolean} - `true` if the attribute exists, otherwise `false`.
     */
  _has (property) {
    return this.Shape().hasAttribute(property);
  }

  /**
     * Set a property on the underlying SVG element.
     * @protected
     * @param {string} property - The name of the property to set.
     * @param {string} value - The value to set for the property.
     */
  _set (property, value) {
    this.Shape().setAttribute(property, value);
  }

  getID () {
    return this._getAsString('id');
  }

  setID (id) {
    this._set('id', id);
  }

  // Methods

  /**
     * Nest one or more Elements within the current element.
     * @param {...Element} elements - The Elements to nest within the current element.
     * @returns {Element} - The current Element instance.
     */
  nest (...elements) {
    elements.forEach(element => this.Shape().append(element.Shape()));

    return this;
  }

  Animate (keyframes, options) {
    this.Shape().animate(keyframes, options);

    return this;
  }

  /**
     * Get the underlying SVG element.
     * @returns {SVGElement} - The SVG element.
     */
  Shape () {
    return this.#element;
  }
}
