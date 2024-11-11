import { Title } from '../../import/text.js';
import { Rectangle } from '../../import/geometry.js';
import { Canvas } from '../../import/general.js';
import { Flex } from '../../src/layout/Flex.js';
import { FillStyle } from '../../src/styles/FillStyle.js';
import { Grid } from '../../src/layout/Grid.js';

const flexLayout = document.getElementById('flex-layout');
const gridLayout = document.getElementById('grid-layout');

const flex = new Flex(
  'row',
  [
    Rectangle.from(0, 0, 10, 10),
    Rectangle.from(0, 0, 5, 10).setFillStyle(new FillStyle({ fill: 'red' })),
    Rectangle.from(0, 0, 10, 10),
    Rectangle.from(0, 0, 30, 10).setFillStyle(new FillStyle({ fill: 'green' })),
    Rectangle.from(0, 0, 10, 10)
  ],
  {
    wrap: false,
    size: { x: 50 },
    spacing: { y: 1, x: 5 },
    origin: { x: 5 },
    alignment: { main: 'center' }
  }
);

// const grid = new Grid(
//   3,
//   [
//     Rectangle.from(0, 0, 10, 10),
//     Rectangle.from(0, 0, 10, 10),
//     Rectangle.from(0, 0, 10, 10),
//     Rectangle.from(0, 0, 30, 10).setFillStyle(new FillStyle({ fill: 'green' })),
//     Rectangle.from(0, 0, 10, 10)
//   ],
// );

Canvas.wrap(flexLayout)
  .nest(flex);

flex.layout();

// Canvas.wrap(gridLayout)
//   .nest(grid);

// grid.layout();
