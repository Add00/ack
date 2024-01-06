import { Canvas } from '../../import/general.js';
import { Line } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = Canvas.wrap(svg)
  .nest(Line.from(50, 75, 50, 35).setStrokeStyle({ stroke: 'black' }));

console.log(canvas);
