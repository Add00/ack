/** @namespace geometry */

import { Geometry } from './Geometry.js';

/**
 * Formats an array of numbers into a string with pairs separated by commas.
 *
 * @private
 * @param {number[]} numbers - An array of numbers to format.
 * @returns {string} The formatted string.
 */
function formatNumbers (numbers) {
  if (numbers.length % 2 !== 0) {
    numbers.push(0);
  }

  const formattedPairs = [];

  for (let i = 0; i < numbers.length; i += 2) {
    const pair = `${numbers[i]},${numbers[i + 1]}`;
    formattedPairs.push(pair);
  }

  const result = formattedPairs.join(' ');
  return result;
}

/**
 * A path is a series points with x and y positions, and line between them. The line can be customized
 * in a wide verity of ways using the methods on this class.
 *
 * @extends {Geometry}
 */
export class Path extends Geometry {
  // Static

  static from (relative = false, startingCommands = '') {
    return new Path(relative, startingCommands);
  }

  // Member

  #relative;

  /**
   * Appends a path command to the path data.
   *
   * @private
   * @param {string} cmd - The command (e.g., 'M', 'L', 'C') for the path segment.
   * @param {number} a - The first parameter of the command.
   * @param {number} b - The second parameter of the command.
   * @param {...number} parameters - Additional parameters for the command.
   * @returns {Path} The current instance.
   */
  #appendCommand (cmd, a, b, ...parameters) {
    const d = this.getCommands() + `${cmd} ${a},${b} ${formatNumbers(parameters)} `;
    super._set('d', d);

    return this;
  }

  /**
   * Creates an instance of the class.
   *
   * @constructor
   * @param {boolean} [relative=false] - Indicates whether the commands are relative.
   * @param {string} [startingCommands=''] - The initial commands for the SVG path.
   */
  constructor (relative = false, startingCommands = '') {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'path'));

    this.setCommands(startingCommands);
    this.setRelativity(relative);
    this.clear();
  }

  // Accessors
  /**
   * Sets and overwrites the current path commands.
   *
   * @param {string} commands - The commands with their parameters in a space separated string.
   * @returns {Path} The current instance.
   */
  setCommands (commands) {
    super._set('d', commands);

    return this;
  }

  /**
   * Gets the current path commands.
   *
   * @returns {string} The path commands as a string.
   */
  getCommands () {
    return super._getAsString('d');
  }

  /**
   * Sets whether the path commands should be relative or absolute.
   *
   * @param {boolean} relative - Whether the path commands should be relative.
   */
  setRelativity (relative) {
    this.#relative = relative;

    return this;
  }

  /**
   * Checks if the path commands are relative.
   *
   * @returns {boolean} True if the path commands are relative, false otherwise.
   */
  isRelative () {
    return this.#relative;
  }

  // Methods

  /**
   * Clears all path commands.
   *
   * @returns {Path} The current instance.
   */
  clear () {
    super._set('d', '');

    return this;
  }

  /**
   * Moves the path to a new position.
   *
   * @param {number} x - The x-coordinate of the new position.
   * @param {number} y - The y-coordinate of the new position.
   * @returns {Path} The current instance.
   */
  moveTo (x, y) {
    const cmd = this.#relative ? 'm' : 'M';

    return this.#appendCommand(cmd, x, y);
  }

  /**
   * Adds a line to the path.
   *
   * @param {number} x - The x-coordinate of the end point of the line.
   * @param {number} y - The y-coordinate of the end point of the line.
   * @returns {Path} The current instance.
   */
  lineTo (x, y) {
    const cmd = this.#relative ? 'l' : 'L';

    return this.#appendCommand(cmd, x, y);
  }

  /**
   * Adds a horizontal line to the path from the current point.
   *
   * @param {number} x - The x-coordinate of the end point of the horizontal line.
   * @returns {Path} The current instance.
   */
  horizontalLineTo (x) {
    const cmd = this.#relative ? 'h' : 'H';

    return this.#appendCommand(cmd, x, null);
  }

  /**
   * Adds a vertical line to the path from the current point.
   *
   * @param {number} y - The y-coordinate of the end point of the vertical line.
   * @returns {Path} The current instance.
   */
  verticalLineTo (y) {
    const cmd = this.#relative ? 'l' : 'L';

    return this.#appendCommand(cmd, y, null);
  }

  /**
   * Adds a cubic Bezier curve to the path from the current point.
   *
   * @param {number} x1 - The x-coordinate of the first control point.
   * @param {number} y1 - The y-coordinate of the first control point.
   * @param {number} x2 - The x-coordinate of the second control point.
   * @param {number} y2 - The y-coordinate of the second control point.
   * @param {number} x - The x-coordinate of the end point of the curve.
   * @param {number} y - The y-coordinate of the end point of the curve.
   * @returns {Path} The current instance.
   */
  cubicBezierCurve (x1, y1, x2, y2, x, y) {
    const cmd = this.#relative ? 'c' : 'C';

    return this.#appendCommand(cmd, x1, y1, x2, y2, x, y);
  }

  /**
   * Adds a smooth cubic Bezier curve to the path from the current point.
   *
   * This command is similar to `cubicBezierCurve`, but it assumes that the first control point
   * is a reflection of the second control point of the previous curve.
   *
   * @param {number} x2 - The x-coordinate of the second control point.
   * @param {number} y2 - The y-coordinate of the second control point.
   * @param {number} x - The x-coordinate of the end point of the curve.
   * @param {number} y - The y-coordinate of the end point of the curve.
   * @returns {Path} The current instance.
   */
  smoothCubicBezierCurve (x2, y2, x, y) {
    const cmd = this.#relative ? 's' : 'S';

    return this.#appendCommand(cmd, x2, y2, x, y);
  }

  /**
   * Adds a quadratic Bezier curve to the path from the current point.
   *
   * @param {number} x1 - The x-coordinate of the control point.
   * @param {number} y1 - The y-coordinate of the control point.
   * @param {number} x - The x-coordinate of the end point of the curve.
   * @param {number} y - The y-coordinate of the end point of the curve.
   * @returns {Path} The current instance.
   */
  quadraticBezierCurve (x1, y1, x, y) {
    const cmd = this.#relative ? 'q' : 'Q';

    return this.#appendCommand(cmd, x1, y1, x, y);
  }

  /**
   * Adds a smooth quadratic Bezier curve to the path from the current point.
   *
   * This command is similar to `quadraticBezierCurve`, but it assumes that the control point
   * is a reflection of the control point of the previous curve.
   *
   * @param {number} x - The x-coordinate of the end point of the curve.
   * @param {number} y - The y-coordinate of the end point of the curve.
   * @returns {Path} The current instance.
   */
  smoothQuadraticBezierCurve (x, y) {
    const cmd = this.#relative ? 't' : 'T';

    return this.#appendCommand(cmd, x, y);
  }

  /**
   * Adds an elliptical arc curve to the path from the current point.
   *
   * @param {number} rx - The x-radius of the ellipse.
   * @param {number} ry - The y-radius of the ellipse.
   * @param {number} angle - The rotation angle of the ellipse.
   * @param {number} x - The x-coordinate of the end point of the curve.
   * @param {number} y - The y-coordinate of the end point of the curve.
   * @param {boolean} [isLarge=true] - Whether to use the larger arc (true) or the smaller arc (false).
   * @param {boolean} [isClockwise=true] - Whether the arc should be drawn in a clockwise direction.
   * @returns {Path} The current instance.
   */
  ellipticalArcCurve (rx, ry, angle, x, y, isLarge = true, isClockwise = true) {
    const cmd = this.#relative ? 'a' : 'A';
    const largeArcFlag = isLarge ? 1 : 0;
    const sweepFlag = isClockwise ? 1 : 0;

    return this.#appendCommand(cmd, rx, ry, angle, largeArcFlag, sweepFlag, x, y);
  }

  /**
   * Closes the path by connecting the first and last points.
   *
   * @returns {Path} The current instance.
   */
  close () {
    const cmd = this.#relative ? 'z' : 'Z';

    return this.#appendCommand(cmd, 0, 0);
  }

  // Methods

  /**
   * Creates a clone of the current Path object.
   *
   * @override
   * @returns {Path} A new Path object with the same properties as the existing one.
   */
  clone () {
    return new Path(this.isRelative(), this.getCommands());
  }
}
