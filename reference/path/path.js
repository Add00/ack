import { Canvas } from '../../import/general.js';
import { Path } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = Canvas.wrap(svg);

const path = new Path()
  .setRelativity(true)
  .setStrokeStyle({ stroke: 'red' })
  .moveTo(25, 1)
  .lineTo(-4, 8)
  .lineTo(8, 0);
// .close();

canvas.nest(path);
