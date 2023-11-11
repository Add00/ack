import { Canvas } from '../../import/general.js';
import { Line } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = new Canvas(svg)
  .nest(Line.from(50, 75, 50, 35));

console.log(canvas);
