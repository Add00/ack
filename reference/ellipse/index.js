import { Canvas } from '../../import/general.js';
import { Ellipse } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = Canvas.wrap(svg)
  .nest(Ellipse.from(50, 75, 25, 35));

console.log(canvas);
