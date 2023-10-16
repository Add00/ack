import { Canvas } from '../../src/Canvas.js';
import { Title } from '../../import/text.js';
import { Circle } from '../../import/geometry.js';
import { Vector3 } from '../../import/containers.js';

const standardCircle = document.getElementById('standard-circle');
const diameterCircle = document.getElementById('diameter-circle');
const vector3Circle = document.getElementById('vector3-circle');

const CANVAS_WIDTH = 100;
const CANVAS_HEIGHT = 100;

Canvas.build(standardCircle)
  .nest(
    Title.build('Circle built from constructor'),
    new Circle(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      25
    )
  );

Canvas.build(diameterCircle)
  .nest(
    Title.build('Circle built from diamiter'),
    Circle.buildFromDiamiter(
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

Canvas.build(vector3Circle)
  .nest(
    Title.build('Circle built from vector3'),
    Circle.buildFromVector3(vector3)
  );
