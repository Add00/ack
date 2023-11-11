import { Canvas } from '../../import/general.js';
import { Rect } from '../../import/geometry.js';

const svg = document.getElementById('game');

function move (event) {
  console.log(event);
}

const paddle = {
  left: Rect.from(50, 50, 25, 75),
  right: Rect.from(400, 50, 25, 75)
};

paddle.left.onKey.down(move);

Canvas.from(svg)
  .nest(paddle.left, paddle.right);
