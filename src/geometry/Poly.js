import { Geometry } from './Geometry.js';

/**
 * An inheritable class.
 *
 * @extends {Geometry}
 */
export class Poly extends Geometry {
  // Accessors

  /**
   * Get all the points on the polygon as a string.
   *
   * @private
   * @returns {string} The points as comma-separated pairs, with pairs separated by spaces.
   */
  #getPointsAsString () {
    return super._getAsString('points');
  }

  /**
   * Set all the points on the polygon as a string.
   *
   * @private
   * @param {Array<DOMPoint>} points - An array of DOMPoints representing the polygon vertices.
   */
  #setPointsAsString (points) {
    const string = points.map(point => `${point.x},${point.y}`).join(' ');
    super._set('points', string);
  }

  /**
   * Add points to the polygon.
   *
   * @param {...DOMPoint} points - The DOMPoints to add to the polygon.
   * @returns {Poly} - The current instance.
   */
  addPoint (...points) {
    const currentPoints = this.getPoints();
    currentPoints.push(...points);

    this.#setPointsAsString(currentPoints);

    return this;
  }

  /**
   * Get all the points on the Polygon as an array of DOMPoint.
   *
   * @returns {Array<DOMPoint>} The points in an array.
   */
  getPoints () {
    const pointsString = this.#getPointsAsString();
    if (!pointsString.trim()) return [];

    const pairs = pointsString.split(' ');
    const points = pairs.map(pair => {
      const [x, y] = pair.split(',');
      return new DOMPoint(Number(x), Number(y));
    });

    return points;
  }

  /**
   * Get the point at the specified index. The points are in the order they were added in.
   *
   * @param {number} index - The index of the point to retrieve.
   * @returns {DOMPoint} The point at the specified index.
   */
  getPointAt (index) {
    return this.getPoints().at(index);
  }

  /**
   * Update the point at the specified index using the provided function.
   *
   * @param {number} index - The index of the point to update.
   * @param {function(DOMPoint)} fn - The function to apply to the point.
   * @returns {Poly} - The current instance.
   */
  updatePointAt (index, fn) {
    const points = this.getPoints();

    fn(points.at(index));

    this.#setPointsAsString(points);

    return this;
  }

  /**
   * Remove a point from the polygon at the specified index.
   *
   * @param {number} index - The index of the point to remove.
   * @returns {DOMPoint|undefined} - The removed point as a DOMPoint, or undefined if the index is out of bounds.
   */
  removePointAt (index) {
    const points = this.getPoints();

    this.#setPointsAsString(points);

    return points.slice(index, 1);
  }

  /**
   * Clear all points from the polygon.
   *
   * @returns {Poly} - The current instance.
   */
  clear () {
    super._set('points', '');

    return this;
  }
}
