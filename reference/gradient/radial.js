import { Circle } from '../../import/geometry.js';
import { Canvas, Define } from '../../import/general.js';
import { RadialGradient, Stop } from '../../import/gradient.js';
import { FillStyle } from '../../src/styles/FillStyle.js';

const svg = document.getElementById('graph');

const gradient = new RadialGradient()
  .nest(
    new Stop(0.1, 'gold'),
    new Stop(0.95, 'red')
  );

const define = new Define()
  .nest(gradient);

const circle = new Circle(50, 50, 25)
  .setFillStyle(new FillStyle({ fill: `url(#${gradient.getID()})` }));

new Canvas(svg)
  .nest(define, circle);
