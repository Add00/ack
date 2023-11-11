import { Canvas } from '../../import/general.js';
import { Title } from '../../import/text.js';
import { Circle } from '../../import/geometry.js';
import { Vector3 } from '../../import/containers.js';

const standardCircle = document.getElementById('standard-circle');
const diameterCircle = document.getElementById('diameter-circle');
const vector3Circle = document.getElementById('vector3-circle');

const CANVAS_WIDTH = 100;
const CANVAS_HEIGHT = 100;

Canvas.from(standardCircle)
  .nest(
    Title.from('Circle built from constructor'),
    new Circle(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      25
    )
  );

Canvas.from(diameterCircle)
  .nest(
    Title.from('Circle built from diameter'),
    Circle.fromDiameter(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      25
    )
  );

const vector3 = new Vector3(
  CANVAS_WIDTH / 2,
  CANVAS_HEIGHT / 2,
  25
);

Canvas.from(vector3Circle)
  .nest(
    Title.from('Circle built from vector3'),
    Circle.fromVector3(vector3)
  );
