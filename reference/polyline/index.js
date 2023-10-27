import { Canvas } from '../../import/general.js';
import { Polyline } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = new Canvas(svg)
  .nest(
    Polyline.build(60, 110)
      .setPoint(65, 120)
      .setPoint(70, 115)
      .setPoint(75, 130)
      .setPoint(80, 125)
      .setPoint(85, 140)
      .setPoint(90, 135)
      .setPoint(95, 150)
      .setPoint(100, 145)
  );

console.log(canvas);
