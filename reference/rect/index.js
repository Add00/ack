import { Title } from '../../import/text.js';
import { Rect } from '../../import/geometry.js';
import { Canvas } from '../../import/general.js';
import { Vector2 } from '../../import/containers.js';

const standardRect = document.getElementById('standard-rect');
const curvedRect = document.getElementById('curved-rect');

Canvas.from(standardRect)
  .nest(
    Title.from('Standard Rectangle'),
    Rect.from(25, 25, 50, 50)
  );

const position = new Vector2(25, 25);
const size = new Vector2(50, 50);
const corner = new Vector2(10, 10);

Canvas.from(curvedRect)
  .nest(
    Title.from('Curved Rectangle'),
    Rect.fromVector2(
      position,
      size,
      corner
    )
  );
