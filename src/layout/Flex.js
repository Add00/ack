import { Vector2 } from '../containers/vector/Vector2.js';
import { Graphic } from '../Graphic.js';
import { Group } from '../Group.js';

/**
 * Flex layout class to arrange Graphic elements either in a row or column with various alignment options.
 * @extends Group
 */
export class Flex extends Group {
  #direction;
  #options;

  /**
   * Creates an instance of Flex.
   *
   * @constructor Flex
   * @param {'row' | 'col'} direction - Direction of the main axis.
   * @param {Graphic[]} members - Visual elements.
   * @param {Object} [options] - Layout options.
   * @param {boolean} [options.wrap=true] - Whether to wrap elements to the next line/column.
   * @param {Object} [options.size={ x: 100, y: 100 }] - Size of the container.
   * @param {number} [options.size.x=100] - Width of the container.
   * @param {number} [options.size.y=100] - Height of the container.
   * @param {Object} [options.origin={ x: 0, y: 0 }] - Origin point for layout.
   * @param {number} [options.origin.x=0] - X-coordinate of the origin.
   * @param {number} [options.origin.y=0] - Y-coordinate of the origin.
   * @param {Object} [options.spacing={ x: 0, y: 0 }] - Spacing between elements.
   * @param {number} [options.spacing.x=0] - Horizontal spacing.
   * @param {number} [options.spacing.y=0] - Vertical spacing.
   * @param {Object} [options.alignment={ main: 'start', cross: 'start' }] - Alignment options.
   * @param {'start' | 'end' | 'center'} [options.alignment.main='start'] - Alignment along the main axis.
   * @param {'start' | 'end' | 'center'} [options.alignment.cross='start'] - Alignment along the cross axis.
   */
  constructor (direction, members, options = {}) {
    super();
    super.setMembers(...members);

    this.#direction = direction;
    this.#options = {
      ...options,
      wrap: options.wrap,
      size: { x: 100, y: 100 },
      origin: { x: 0, y: 0 },
      spacing: { x: 0, y: 0 },
      alignment: { main: 'start', cross: 'start' },
      size: { ...{ x: 100, y: 100 }, ...options.size },
      origin: { ...{ x: 0, y: 0 }, ...options.origin },
      spacing: { ...{ x: 0, y: 0 }, ...options.spacing },
      alignment: { ...{ main: 'start', cross: 'start' }, ...options.alignment },
      background: null
    };
  }

  // Accessors

  /**
   * Sets the direction of the layout.
   * @param {'row' | 'col'} direction - The direction to set.
   * @returns {this} - The current instance for chaining.
   */
  setDirection (direction) {
    this.#direction = direction;

    return this;
  }

  /**
   * Gets the current direction of the layout.
   * @returns {'row' | 'col'} - The current direction.
   */
  getDirection () {
    return this.#direction;
  }

  /**
   * Toggles the wrap option.
   * @returns {this} - The current instance for chaining.
   */
  toggleWrap () {
    this.#options.wrap = !this.#options.wrap;

    return this;
  }

  /**
   * Checks if wrapping is enabled.
   *
   * @returns {boolean} - True if wrapping is enabled, false otherwise.
   */
  isWrap () {
    return this.#options.wrap;
  }

  /**
   * Sets the size of the layout container.
   *
   * @param {Vector2} size - The size to set.
   * @returns {this} - The current instance for chaining.
   */
  setSize (size) {
    this.#options.size.x = size.getX();
    this.#options.size.y = size.getY();

    return this;
  }

  /**
   * Gets the size of the layout container.
   *
   * @returns {Vector2} - The current size.
   */
  getSize () {
    return new Vector2(this.#options.size.x, this.#options.size.y);
  }

  /**
   * Sets the origin point of the layout.
   *
   * @param {Vector2} origin - The origin to set.
   * @returns {this} - The current instance for chaining.
   */
  setOrigin (origin) {
    this.#options.origin.x = origin.getX();
    this.#options.origin.y = origin.getY();

    return this;
  }

  /**
   * Gets the origin point of the layout.
   *
   * @returns {Vector2} - The current origin.
   */
  getOrigin () {
    return new Vector2(this.#options.origin.x, this.#options.origin.y);
  }

  /**
   * Sets the spacing between elements in the layout.
   *
   * @param {Vector2} spacing - The spacing to set.
   * @returns {this} - The current instance for chaining.
   */
  setSpacing (spacing) {
    this.#options.spacing.x = spacing.getX();
    this.#options.spacing.y = spacing.getY();

    return this;
  }

  /**
   * Gets the spacing between elements in the layout.
   *
   * @returns {Vector2} - The current spacing.
   */
  getSpacing () {
    return new Vector2(this.#options.spacing.x, this.#options.spacing.y);
  }

  /**
  * Sets the alignment of elements along the main axis.
  *
  * @param {'start' | 'end' | 'center'} alignment - The alignment to set.
  * @returns {this} - The current instance for chaining.
  */
  setMainAlignment (alignment) {
    this.#options.alignment.main = alignment;

    return this;
  }

  /**
   * Gets the alignment of elements along the main axis.
   *
   * @returns {'start' | 'end' | 'center'} - The current main alignment.
   */
  getMainAlignment () {
    return this.#options.alignment.main;
  }

  /**
   * Sets the alignment of elements along the cross axis.
   *
   * @param {'start' | 'end' | 'center'} alignment - The alignment to set.
   * @returns {this} - The current instance for chaining.
   */
  setCrossAlignment (alignment) {
    this.#options.alignment.cross = alignment;

    return this;
  }

  /**
   * Gets the alignment of elements along the cross axis.
   *
   * @returns {'start' | 'end' | 'center'} - The current cross alignment.
   */
  getCrossAlignment () {
    return this.#options.alignment.cross;
  }

  //

  #getMinWidth (members) {
    let width = 0;
    for (const member of members) {
      const bBox = member.getBoundingBox();

      width = bBox.width > width ? bBox.width : width;
    }

    return width;
  }

  #getMinHeight (members) {
    let height = 0;
    for (const member of members) {
      const bBox = member.getBoundingBox();

      height = bBox.height > height ? bBox.height : height;
    }

    return height;
  }

  // Methods

  /**
   * Arranges the elements based on the layout direction and alignment settings.
   */
  layout () {
    const members = super.getMembers();

    if (this.#direction === 'row') {
      const minWidth = this.#getMinWidth(members);
      const minHeight = this.#getMinHeight(members);

      switch (this.#options.alignment.main) {
        case 'start':
          let y = this.#options.origin.y;
          let x = this.#options.origin.x;

          for (const member of members) {
            member.setX(x);
            member.setY(y);

            x += member.getBoundingBox().width + this.#options.spacing.x;

            if (this.#options.wrap && x > this.#options.size.x) {
              x = this.#options.origin.x;
              y += minHeight + this.#options.spacing.y;
            }
          }

          console.log(this.#options.wrap);
          break;

        case 'center':
          const totalWidth = members.reduce((acc, member) => acc + member.getBoundingBox().width, 0);
          const remainingSpace = this.#options.size.x - totalWidth - (members.length - 1) * this.#options.spacing.x;
          x = this.#options.origin.x + remainingSpace / 2;

          for (const member of members) {
            member.setX(x);
            member.setY(y);

            x += member.getBoundingBox().width + this.#options.spacing.x;

            if (this.#options.wrap && x > this.#options.size.x) {
              x = this.#options.origin.x + remainingSpace / 2;
              y += minHeight + this.#options.spacing.y;
            }
          }
          break;

        case 'end':

          break;

        default:
          throw new Error('unimplemented main alignment');
      }
    }
  }

  /**
   * Creates a clone of the current Flex instance.
   *
   * @returns {Flex} - A new instance of Flex with the same properties.
   */
  clone () {
    return new Flex(this.#direction, super.getMembers(), this.options);
  }
}
