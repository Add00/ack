import { Vector2 } from '../containers/vector/Vector2.js';
import { Graphic } from '../Graphic.js';
import { Group } from '../Group.js';

/**
 * Grid layout class to arrange Graphic elements in a grid with various alignment options.
 * @extends Group
 */
export class Grid extends Group {
  #options;

  /**
   * Creates an instance of Grid.
   *
   * @constructor Grid
   * @param {number} columns - Number of columns in the grid.
   * @param {Graphic[]} members - Visual elements.
   * @param {Object} [options] - Layout options.
   * @param {Object} [options.size={ width: 100, height: 100 }] - Size of the container.
   * @param {number} [options.size.width=100] - Width of the container.
   * @param {number} [options.size.height=100] - Height of the container.
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
  constructor (columns, members, options = {}) {
    super();
    super.setMembers(...members);

    this.#options = {
      ...options,
      size: { width: 100, height: 100 },
      origin: { x: 0, y: 0 },
      spacing: { x: 0, y: 0 },
      alignment: { main: 'start', cross: 'start' },
      size: { ...{ width: 100, height: 100 }, ...options.size },
      origin: { ...{ x: 0, y: 0 }, ...options.origin },
      spacing: { ...{ x: 0, y: 0 }, ...options.spacing },
      alignment: { ...{ main: 'start', cross: 'start' }, ...options.alignment },
      columns
    };
  }

  /**
   * Lays out the elements in a grid pattern.
   * @param {Graphic[]} members - Elements to layout.
   * @private
   */
  #layoutGrid (members) {
    const cols = this.#options.columns;
    const { origin, size, spacing } = this.#options;

    let x = origin.x;
    let y = origin.y;
    let maxHeight = 0;
    let rowIndex = 0;
    let colIndex = 0;

    for (const member of members) {
      const memberWidth = member.getWidth();
      const memberHeight = member.getHeight();

      // Calculate positions
      member.setX(x);
      member.setY(y);

      // Update maximum height in current row
      maxHeight = Math.max(maxHeight, memberHeight);

      // Move to next column
      x += memberWidth + spacing.x;
      colIndex++;

      // Check if reached end of column
      if (colIndex >= cols) {
        // Align row based on main axis alignment
        this.#alignRow(rowIndex, maxHeight, cols);

        // Reset for next row
        x = origin.x;
        y += maxHeight + spacing.y;
        maxHeight = 0;
        colIndex = 0;
        rowIndex++;
      }
    }

    // Align last row if not aligned
    if (colIndex > 0) {
      this.#alignRow(rowIndex, maxHeight, colIndex);
    }
  }

  /**
   * Aligns a row of elements based on main axis alignment.
   * @param {number} rowIndex - Index of the row to align.
   * @param {number} maxHeight - Maximum height of elements in the row.
   * @param {number} numCols - Number of columns in the row.
   * @private
   */
  #alignRow (rowIndex, maxHeight, numCols) {
    const { origin, size, spacing, alignment } = this.#options;
    const totalRowWidth = numCols * size.width + (numCols - 1) * spacing.x;
    let xOffset = 0;

    switch (alignment.main) {
      case 'center':
        xOffset = (size.width * numCols + (numCols - 1) * spacing.x - totalRowWidth) / 2;
        break;
      case 'end':
        xOffset = size.width * numCols + (numCols - 1) * spacing.x - totalRowWidth;
        break;
      case 'space-between':
        xOffset = 0; // Start from origin
        break;
      case 'space-around':
        xOffset = spacing.x / 2;
        break;
    }

    // Apply alignment to each element in the row
    const startIdx = rowIndex * numCols;
    const endIdx = Math.min(startIdx + numCols, super.getMembers().length);
    for (let i = startIdx; i < endIdx; i++) {
      const member = super.getMembers()[i];
      member.setX(member.getX() + xOffset);
      xOffset += size.width + spacing.x;
    }
  }

  // Accessors

  /**
   * Sets the size of the layout container.
   * @param {Vector2} size - The size to set.
   * @returns {this} - The current instance for chaining.
   */
  setSize (size) {
    this.#options.size.width = size.getX();
    this.#options.size.height = size.getY();
    return this;
  }

  /**
   * Gets the size of the layout container.
   * @returns {Vector2} - The current size.
   */
  getSize () {
    return new Vector2(this.#options.size.width, this.#options.size.height);
  }

  /**
   * Sets the origin point of the layout.
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
   * @returns {Vector2} - The current origin.
   */
  getOrigin () {
    return new Vector2(this.#options.origin.x, this.#options.origin.y);
  }

  /**
   * Sets the spacing between elements in the layout.
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
   * @returns {Vector2} - The current spacing.
   */
  getSpacing () {
    return new Vector2(this.#options.spacing.x, this.#options.spacing.y);
  }

  /**
   * Sets the alignment of elements along the main axis.
   * @param {'start' | 'end' | 'center'} alignment - The alignment to set.
   * @returns {this} - The current instance for chaining.
   */
  setMainAlignment (alignment) {
    this.#options.alignment.main = alignment;
    return this;
  }

  /**
   * Gets the alignment of elements along the main axis.
   * @returns {'start' | 'end' | 'center'} - The current main alignment.
   */
  getMainAlignment () {
    return this.#options.alignment.main;
  }

  /**
   * Sets the alignment of elements along the cross axis.
   * @param {'start' | 'end' | 'center'} alignment - The alignment to set.
   * @returns {this} - The current instance for chaining.
   */
  setCrossAlignment (alignment) {
    this.#options.alignment.cross = alignment;
    return this;
  }

  /**
   * Gets the alignment of elements along the cross axis.
   * @returns {'start' | 'end' | 'center'} - The current cross alignment.
   */
  getCrossAlignment () {
    return this.#options.alignment.cross;
  }

  // Methods

  /**
   * Arranges the elements based on the grid layout and alignment settings.
   */
  layout () {
    const members = super.getMembers();
    this.#layoutGrid(members);
  }

  /**
   * Creates a clone of the current Grid instance.
   * @returns {Grid} - A new instance of Grid with the same properties.
   */
  clone () {
    return new Grid(this.#options.columns, super.getMembers(), this.#options);
  }
}
