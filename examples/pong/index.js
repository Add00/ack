import { Canvas } from '../../import/general.js';
import { Rectangle } from '../../import/geometry.js';

const paddle = {
  left: Rectangle.from(50, 50, 25, 75),
  right: Rectangle.from(window.screen.width - 50, 50, 25, 75)
};

const ball = Rectangle.from(225, 75, 25, 25);

function move (event) {
  console.log(event);

  switch (event.key) {
    case 'w':
      paddle.left.setY(paddle.left.getY() - 2);
      break;

    case 's':
      paddle.left.setY(paddle.left.getY() + 2);
      break;

    case 'u':
      paddle.right.setY(paddle.right.getY() - 2);
      break;

    case 'j':
      paddle.right.setY(paddle.right.getY() + 2);
      break;
  }
}

const canvas = Canvas.from(0, 0, window.visualViewport.width, 500)
  .nest(paddle.left, paddle.right, ball);

canvas.onKey.down(move);

document.body.append(canvas.Shape());
