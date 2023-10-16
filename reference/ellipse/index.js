import { Canvas } from '../../svg/Canvas.js';
import { Ellipse } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = new Canvas(svg)
  .nest(Ellipse.build(50, 75, 25, 35));

console.log(canvas);
