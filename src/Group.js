import { Geometry } from './geometry/Geometry.js';

/**
 * Represents a group of SVG elements.
 *
 * @extends {Geometry}
 */
export class Group extends Geometry {
  // Static

  /**
   * Creates a new Group instance and nests the provided elements.
   *
   * @param {...Geometry} elements - The elements to nest within the group.
   * @returns {Group} A new Group instance with the nested elements.
   */
  static group (...elements) {
    return new Group().nest(...elements);
  }

  /**
   * Alias for the `group` method. Creates a new Group instance and nests the provided elements.
   *
   * @param {...Geometry} elements - The elements to nest within the group.
   * @returns {Group} A new Group instance with the nested elements.
   */
  static from (...elements) {
    return Group.group(...elements);
  }

  /**
   * @type {Geometry[]}
   */
  #members;

  /**
   * Creates a new Group instance.
   *
   * @constructor Group
   */
  constructor () {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'g'));

    this.#members = [];
  }

  // Accessors

  /**
   * Alias for the `nest` method. Nests the members within the group.
   *
   * @param {...Geometry} members - The elements to nest within the group.
   * @returns {Group} The modified Group instance with the nested members.
   */
  setMembers (...members) {
    this.nest(...members);

    return this;
  }

  /**
   * Get all of the members of the group.
   *
   * @returns {Geometry[]} - An array of members.
   */
  getMembers () {
    return this.#members;
  }

  // Methods

  /**
   * Nests the provided elements within the group.
   *
   * @param {...Geometry} elements - The elements to nest within the group.
   * @returns {Group} The current instance.
   */
  nest (...elements) {
    this.#members = elements;

    elements.forEach(element => this.Shape().append(element.Shape()));

    return this;
  }

  // Iterators

  * [Symbol.iterator] () {
    let index = 0;
    while (index < this.#members.length) {
      yield this.#members[index++];
    }
  }
}
