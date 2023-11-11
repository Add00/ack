import { Text } from '../../import/text.js';
import { Canvas } from '../../src/Canvas.js';
import { Line, Circle } from '../../import/geometry.js';
import { FillStyle, StrokeStyle } from '../../import/styles.js';
import { ExtendedMath as EMath } from '../../src/ExtendedMath.js';

const svg = document.getElementById('graph');

const digits = [];

let x = 0;
let y = -150;
for (let i = 12; i > 0; i--) {
  digits.push(Text.from(i, x, y));

  const polar = EMath.cartesianToPolar(x, y);
  polar.angle -= Math.PI / 6;

  const cart = EMath.polarToCartesian(polar.r, polar.angle);
  x = cart.x;
  y = cart.y;
}

const hour = Line.from(0, 0, 0, 50)
  .setStrokeStyle(new StrokeStyle({ stroke: 'black' }));

const min = Line.from(0, 0, 0, 100)
  .setStrokeStyle(new StrokeStyle({ stroke: 'black' }));

const sec = Line.from(0, 0, 0, 150)
  .setStrokeStyle(new StrokeStyle({ stroke: 'red' }));

const face = Circle.from(0, 0, 150)
  .setStrokeStyle(new StrokeStyle({ stroke: 'black' }))
  .setFillStyle(new FillStyle({ fillOpacity: 0 }));

function update (hand, length, getter) {
  const date = new Date();

  let angle = EMath.remap(date[getter](), 0, 60, 0, 2 * Math.PI);
  angle += getter === 'getHours' ? Math.PI / 2 : -Math.PI / 2;

  const position = EMath.polarToCartesian(length, angle);

  hand.setX2(position.x);
  hand.setY2(position.y);
}

update(sec, 150, 'getSeconds');
update(min, 100, 'getMinutes');
update(hour, 50, 'getHours');

setInterval(() => update(sec, 150, 'getSeconds'), 1000);
setInterval(() => update(min, 100, 'getMinutes'), 60000);
setInterval(() => update(hour, 50, 'getHours'), 3.6e+6);

const canvas = Canvas.from(svg);
canvas
  .setViewBoxX(-250)
  .setViewBoxY(-250)
  .setViewBoxWidth(500)
  .setViewBoxHeight(500)
  .nest(face, hour, min, sec)
  .nest(...digits);
