/* globals DOMPoint */
import { Canvas, Noise, ExtendedMath as EMath } from '../../import/general.js';
import { Polygon } from '../../import/geometry.js';

// Constants
/**
 * The side length of the wave polygon.
 * @type {number}
 */
const SIDE = 500;

/**
 * The duration of the animation in milliseconds.
 * @type {number}
 */
const ANIMATION_DURATION = 500;

/**
 * Create a polygon representing the initial wave shape.
 * @type {Polygon}
 */
const wave = Polygon.from(
  new DOMPoint(0, SIDE), // 0
  new DOMPoint(SIDE, SIDE), // 1
  new DOMPoint(SIDE, SIDE / 2), // 2
  new DOMPoint(SIDE / 2 + SIDE / 4, SIDE / 2), // 3
  new DOMPoint(SIDE / 2, SIDE / 2), // 4
  new DOMPoint(SIDE / 4, SIDE / 2), // 5
  new DOMPoint(0, SIDE / 2) // 6
);

/**
 * The number of animation cycles completed.
 * @type {number}
 */
let cycles = 0;

/**
 * Updates the Y-coordinate of a wave point based on Simplex noise.
 * @param {DOMPoint} point - The point to update.
 * @param {number} index - The index of the point in the wave.
 */
function updateWavePoints (point, index) {
  const height = Noise.simplex2(
    EMath.remap(index, 0, wave.getPoints().length - 2, -1, 1),
    EMath.remap(cycles, 0, ANIMATION_DURATION, -1, 1)
  );
  point.y = EMath.remap(height, -1, 1, 150, 350);
}

/**
 * Checks if a point is an interior point of the wave (excluding endpoints).
 * @param {DOMPoint} point - The point to check.
 * @param {number} index - The index of the point in the wave.
 * @returns {boolean} True if the point is an interior point, false otherwise.
 */
function isInteriorPoint (point, index) {
  return index > 1 && index < 7;
}

/**
 * Animates the wave by updating its points and triggering a new animation frame.
 */
function animateWave () {
  wave.updatePoints(updateWavePoints, isInteriorPoint);

  cycles += 0.75;
  if (cycles > ANIMATION_DURATION) {
    cycles = 0;
  }

  window.requestAnimationFrame(animateWave);
}

/**
 * The canvas element for rendering the wave animation.
 * @type {Canvas}
 */
const canvas = Canvas.wrap(document.getElementById('canvas'));
canvas.nest(wave);

animateWave();
