import { Canvas } from '../../import/general.js';
import { FillStyle } from '../../import/styles.js';
import { Text, TextSpan } from '../../import/text.js';

const standardText = document.getElementById('standard-text');
const rotateText = document.getElementById('rotate-text');
const nestedText = document.getElementById('nested-text');

Canvas.build(standardText)
  .nest(Text.build('Hello, World!', 10, 10));

Canvas.build(rotateText)
  .nest(
    Text.build('Hello, World!', 10, 10)
      .setRotation(30)
  );

Canvas.build(nestedText)
  .nest(
    Text.build('Hel', 10, 10)
      .nest(
        TextSpan.build('lo, ')
          .setFillStyle(
            new FillStyle({ fill: 'green' })
          ),
        TextSpan.build(' Wor')
          .setFillStyle(
            new FillStyle({ fill: 'red' })
          ),
        TextSpan.build('ld!')
          .setFillStyle(
            new FillStyle({ fill: 'blue' })
          )
      )
  );
