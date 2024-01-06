/* globals DOMPoint */
import { Canvas, Noise, ExtendedMath as EMath } from '../../import/general.js';
import { Polygon } from '../../import/geometry.js';

const SIDE = 500;
const ANIMATION_DURATION = 100;

const wave = Polygon.from(
  new DOMPoint(0, SIDE), // 0
  new DOMPoint(SIDE, SIDE), // 1
  new DOMPoint(SIDE, SIDE / 2), // 2
  new DOMPoint(SIDE / 2 + SIDE / 4, SIDE / 2), // 3
  new DOMPoint(SIDE / 2, SIDE / 2), // 4 Midpoint
  new DOMPoint(SIDE / 4, SIDE / 2), // 5
  new DOMPoint(0, SIDE / 2) // 6
);

let cycles = 0;

function updateWavePoints (point, index) {
  const height = Noise.simplex2(
    EMath.remap(index, 0, wave.getPoints().length - 2, -1, 1),
    EMath.remap(cycles, 0, ANIMATION_DURATION, -1, 1)
  );
  point.y = EMath.remap(height, -1, 1, 150, 350);
}

function isInteriorPoint (point, index) {
  return index > 1 && index < 7;
}

function animateWave () {
  wave.updatePoints(updateWavePoints, isInteriorPoint);

  cycles += 1;
  if (cycles > ANIMATION_DURATION) {
    cycles = 0;
  }

  window.requestAnimationFrame(animateWave);
}

const canvas = Canvas.wrap(document.getElementById('canvas'));
canvas.nest(wave);

animateWave();
