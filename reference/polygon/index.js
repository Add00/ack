/* global DOMPoint */

import { Canvas } from '../../import/general.js';
import { Polygon } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = Canvas.wrap(svg)
  .nest(
    Polygon.from(
      new DOMPoint(50, 160),
      new DOMPoint(55, 180),
      new DOMPoint(70, 180),
      new DOMPoint(60, 190),
      new DOMPoint(65, 205),
      new DOMPoint(50, 195),
      new DOMPoint(35, 205),
      new DOMPoint(40, 190),
      new DOMPoint(30, 180),
      new DOMPoint(45, 180)
    )
  );

console.log(canvas);
