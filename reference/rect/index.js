import { Title } from '../../import/text.js';
import { Rectangle } from '../../import/geometry.js';
import { Canvas } from '../../import/general.js';
import { Vector2 } from '../../import/containers.js';

const standardRectangle = document.getElementById('standard-rect');
const curvedRectangle = document.getElementById('curved-rect');

Canvas.wrap(standardRectangle)
  .nest(
    Title.from('Standard Rectangle'),
    Rectangle.from(25, 25, 50, 50)
  );

const position = new Vector2(25, 25);
const size = new Vector2(50, 50);
const corner = new Vector2(10, 10);

Canvas.from(curvedRectangle)
  .nest(
    Title.from('Curved Rectangle'),
    Rectangle.fromVector2(
      position,
      size,
      corner
    )
  );
