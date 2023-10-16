import { Canvas } from '../../svg/Canvas.js';
import { Title } from '../../import/text.js';
import { Rect } from '../../import/geometry.js';
import { Vector2 } from '../../import/containers.js';

const standardRect = document.getElementById('standard-rect');
const curvedRect = document.getElementById('curved-rect');

Canvas.build(standardRect)
  .nest(
    Title.build('Standard Rectangle'),
    Rect.build(25, 25, 50, 50)
  );

const position = new Vector2(25, 25);
const size = new Vector2(50, 50);
const corner = new Vector2(10, 10);

Canvas.build(curvedRect)
  .nest(
    Title.build('Curved Rectangle'),
    Rect.buildFromVector2(
      position,
      size,
      corner
    )
  );
