import { Group } from '../../src/Group.js';
import { Text } from '../../import/text.js';
import { Canvas } from '../../src/Canvas.js';
import { Rect } from '../../import/geometry.js';
import { FillStyle, StrokeStyle } from '../../import/styles.js';

const svg = document.getElementById('graph');

const equation = [];
const left = [];
const right = [];

const digits = [];

const display = Text.from('|', 20, 10);

for (let index = 1; index < 10; index++) {
  const row = Math.floor((index - 1) / 3);
  const col = (index - 1) % 3;

  const button = Group.from(
    Text.from(index, 30 + 40 * col, 35 + 40 * row),
    Rect.from(20 + 40 * col, 15 + 40 * row, 35, 35, 5, 5)
      .setStrokeStyle(new StrokeStyle({ strokeWidth: 2 }))
      .setFillStyle(new FillStyle({ fillOpacity: 0 }))
      .onMouse.click(() => {
        left.push(index);
        display.setContent(left.join(''));
      })
  );

  digits.push(button);
}

const symbols = [];

for (let index = 1; index < 2; index++) {
  const row = Math.floor((index - 1) / 3);
  const col = (index - 1) % 3;

  const button = Group.from(
    Text.from('+', 215 + 40 * col, 35 + 40 * row),
    Rect.from(200 + 40 * col, 15 + 40 * row, 35, 35, 5, 5)
      .setStrokeStyle(new StrokeStyle({ strokeWidth: 2 }))
      .setFillStyle(new FillStyle({ fillOpacity: 0 }))
      .onMouse.click(() => {
        equation.push(index);
        display.setContent(equation.join(''));
      })
  );

  symbols.push(button);
}

Canvas.from(svg)
  .nest(display, ...digits, ...symbols);
