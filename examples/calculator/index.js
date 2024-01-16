import { Group } from '../../src/Group.js';
import { Text } from '../../import/text.js';
import { Canvas } from '../../src/Canvas.js';
import { Rectangle } from '../../import/geometry.js';
import { FillStyle, StrokeStyle } from '../../import/styles.js';

const SIZE = 50;
const svg = document.getElementById('graph');

const left = [];
const right = [];
let side = false;
let result = 0;

const display = Text.from(result, 50, 210);

function buttonBuilder (x, y, symbol) {
  const button = Group.from(
    Rectangle.from(x, y, SIZE - 5, SIZE - 5, 5, 5)
      .setStrokeStyle(new StrokeStyle({ stroke: 'black' }))
      .setFillStyle(new FillStyle({ fill: 'transparent' })),
    Text.from(symbol, (x - 3) + SIZE / 2, (y + 3) + SIZE / 2)
  );

  button.onMouse.enter(() => {
    button.getMembers().at(0).setFillStyle(new FillStyle({ fill: 'black' }));
    button.getMembers().at(1).setStrokeStyle(new StrokeStyle({ stroke: 'white' }));
  });

  button.onMouse.leave(() => {
    button.getMembers().at(0).setFillStyle(new FillStyle({ fill: 'transparent' }));
    button.getMembers().at(1).setStrokeStyle(new StrokeStyle({ stroke: 'black' }));
  });

  button.onMouse.click(() => {
    const symbol = button.getMembers().at(1).getContent();

    switch (symbol) {
      case '=':
        left.splice(0, left.length);
        right.splice(0, right.length);
        side = false;
        result = 0;
        break;

      case '+':
        result = Number(left.join()) + Number(right.join());
        side = !side;
        break;

      case '-':
        result = Number(left.join()) - Number(right.join());
        side = !side;
        break;

      case '*':
        result = Number(left.join()) * Number(right.join());
        side = !side;
        break;

      case '/':
        result = Number(left.join()) / Number(right.join());
        side = !side;
        break;

      default:
        if (side) {
          left.push(symbol);
        } else {
          right.push(symbol);
        }
        break;
    }

    display.setContent(display);
    console.log(left, right);
  });

  return button;
}

const symbols = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+', '='];

const gridSize = 4;
const buttons = [];

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const index = i * gridSize + j;
    const x = j * SIZE;
    const y = i * SIZE;

    if (index < symbols.length) {
      buttons.push(buttonBuilder(x, y, symbols[index]));
    }
  }
}

Canvas.from(svg)
  .nest(...buttons, display);
