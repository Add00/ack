/* globals DOMPoint */
import { Canvas, Noise, ExtendedMath as EMath } from '../../import/general.js';
import { Polygon } from '../../import/geometry.js';

const SIDE = 500;

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

setInterval(() => {
  wave.updatePoints(
    (point, index) => {
      const height = Noise.simplex2(
        EMath.remap(index, 0, wave.getPoints().length - 2, -1, 1),
        EMath.remap(cycles, 0, 100, -1, 1)
      );

      point.y = EMath.remap(height, -1, 1, 150, 350);
    },
    (point, index) => {
      return index > 1 && index < 7;
    });

  cycles += 1;

  if (cycles > 100) cycles = 0;
}, 500);

const canvas = Canvas.from(document.getElementById('canvas'));
canvas.nest(wave);
