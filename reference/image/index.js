import { Canvas, Image } from '../../import/general.js';

const standardImage = document.getElementById('standard-image');

Canvas.from(standardImage)
  .nest(Image.from(0, 0, 50, 50, 'https://upload.wikimedia.org/wikipedia/commons/0/07/Hibiscus_flower_red.jpg'));
