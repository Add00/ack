import { Canvas } from '../../svg/Canvas.js';
import { Path } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = new Canvas(svg);

const path = new Path()
  .setRelativity(true)
  .setStrokeStyle({ stroke: 'red' })
  .moveTo(25, 1)
  .lineTo(-4, 8)
  .lineTo(8, 0);
// .close();

canvas.nest(path);
