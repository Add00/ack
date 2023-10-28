import { Rect } from '../../import/geometry.js';
import { FillStyle } from '../../import/styles.js';
import { Noise, Canvas, ExtendedMath as EMath } from '../../import/general.js';

const svg = document.getElementById('graph');

const grid = [];

const MIN_X = 0;
const MAX_X = 20;
const MIN_Y = 0;
const MAX_Y = 20;

for (let x = MIN_X; x < MAX_X; x++) {
  for (let y = MIN_Y; y < MAX_Y; y++) {
    grid.push(
      Rect.build(10 + 10 * x, 10 + 10 * y, 8, 8)
        .setFillStyle(new FillStyle({
          fillOpacity: EMath.remap(
            Noise.simplex2(x / 10, y / 10),
            -1, 1, 0, 1
          )
        }))
    );
  }
}

const canvas = Canvas.build(svg);
canvas.nest(...grid);
