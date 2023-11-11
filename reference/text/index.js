import { Canvas } from '../../import/general.js';
import { FillStyle } from '../../import/styles.js';
import { Text, TextSpan } from '../../import/text.js';

const standardText = document.getElementById('standard-text');
const rotateText = document.getElementById('rotate-text');
const nestedText = document.getElementById('nested-text');

Canvas.from(standardText)
  .nest(Text.from('Hello, World!', 10, 10));

Canvas.from(rotateText)
  .nest(
    Text.from('Hello, World!', 10, 10)
      .setRotation(30)
  );

Canvas.from(nestedText)
  .nest(
    Text.from('Hel', 10, 10)
      .nest(
        TextSpan.from('lo, ')
          .setFillStyle(
            new FillStyle({ fill: 'green' })
          ),
        TextSpan.from(' Wor')
          .setFillStyle(
            new FillStyle({ fill: 'red' })
          ),
        TextSpan.from('ld!')
          .setFillStyle(
            new FillStyle({ fill: 'blue' })
          )
      )
  );
