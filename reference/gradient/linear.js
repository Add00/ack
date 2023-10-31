import { Circle } from '../../import/geometry.js';
import { Canvas, Define } from '../../import/general.js';
import { LinearGradient, Stop } from '../../import/gradient.js';
import { FillStyle } from '../../src/styles/FillStyle.js';

const svg = document.getElementById('graph');

const gradient = new LinearGradient()
  .setGradientTransform('rotate(90)')
  .nest(
    new Stop(0, 'gold', 0).onMouse.click(() => console.log('hi world!')),
    new Stop(0.5, 'grey', 0.5),
    new Stop(1, 'red', 1)
  );

const define = new Define()
  .nest(gradient);

const circle = new Circle(50, 50, 25)
  .setFillStyle(new FillStyle({ fill: `url(#${gradient.getID()})` }));

new Canvas(svg)
  .nest(define, circle);
