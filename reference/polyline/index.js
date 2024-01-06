/* global DOMPoint */

import { Canvas } from '../../import/general.js';
import { Polyline } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = Canvas.wrap(svg)
  .nest(
    Polyline.from(new DOMPoint(60, 110))
      .addPoint(new DOMPoint(70, 115))
      .addPoint(new DOMPoint(75, 130))
      .addPoint(new DOMPoint(80, 125))
      .addPoint(new DOMPoint(85, 140))
      .addPoint(new DOMPoint(90, 135))
      .addPoint(new DOMPoint(95, 150))
      .addPoint(new DOMPoint(100, 145))
  );

console.log(canvas);
