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
  const height = Noise.simplex2(
    EMath.remap(SIDE / 2, 0, SIDE, -1, 1),
    EMath.remap(cycles, 0, 500, -1, 1)
  );

  const newPoint = new DOMPoint(
    SIDE / 2,
    EMath.remap(height, -1, 1, 150, 350)
  );

  wave.updatePointAt(4, (oldPoint) => {
    oldPoint.y = newPoint.y;
  });

  console.log(height, EMath.remap(height, 0, 1, 150, 350));

  cycles += 1;

  if (cycles > 500) cycles = 0;
}, 500);

const canvas = Canvas.from(document.getElementById('canvas'));
canvas.nest(wave);