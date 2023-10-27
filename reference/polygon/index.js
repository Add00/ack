import { Canvas } from '../../import/general.js';
import { Polygon } from '../../import/geometry.js';

const svg = document.getElementById('graph');

const canvas = new Canvas(svg)
  .nest(
    Polygon.build(50, 160)
      .setPoint(55, 180)
      .setPoint(70, 180)
      .setPoint(60, 190)
      .setPoint(65, 205)
      .setPoint(50, 195)
      .setPoint(35, 205)
      .setPoint(40, 190)
      .setPoint(30, 180)
      .setPoint(45, 180)
  );

console.log(canvas);
