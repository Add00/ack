/* global DOMPoint */
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
   * @returns {Poly} The current instance.
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
    if (pointsString === null || pointsString.trim() === '') return [];

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
   * @param {function(DOMPoint): void} updater - The function which will transform the point.
   * @returns {Poly} The current instance.
   */
  updatePointAt (index, updater) {
    const points = this.getPoints();

    updater(points.at(index));

    this.#setPointsAsString(points);

    return this;
  }

  /**
   * Updates all the points on the shape.
   *
   * @param {function(DOMPoint, number): void} updater - The function which will transform the point.
   * @param {function(DOMPoint, number): boolean} filter - The function to check if the point should be updated.
   * @returns {Poly} The current instance.
   */
  updatePoints (updater, filter = () => true) {
    const points = this.getPoints();

    points
      .filter(filter)
      .forEach((point, index) => {
        updater(point, index);
      });

    this.#setPointsAsString(points);

    return this;
  }

  /**
   * Remove a point from the polygon at the specified index.
   *
   * @param {number} index - The index of the point to remove.
   * @returns {DOMPoint|undefined} The removed point as a DOMPoint, or undefined if the index is out of bounds.
   */
  removePointAt (index) {
    const points = this.getPoints();

    if (index < 0 || index >= points.length) {
      return undefined;
    }

    const removedPoint = points.splice(index, 1)[0];
    this.#setPointsAsString(points);

    return removedPoint;
  }

  /**
   * Clear all points from the polygon.
   *
   * @returns {Poly} The current instance.
   */
  clear () {
    super._set('points', '');

    return this;
  }
}
