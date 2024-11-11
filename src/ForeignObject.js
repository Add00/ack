import { Quadrilateral } from '../src/geometry/Quadrilateral.js';

export class ForeignObject extends Quadrilateral {
  // Static

  static parse ({ x, y, width, height }) {
    return new ForeignObject(x, y, width, height);
  }

  static from (x, y, width, height) {
    return new ForeignObject(x, y, width, height);
  }

  constructor (x, y, width, height) {
    super('foreignObject');

    super.setX(x);
    super.setY(y);
    super.setWidth(width);
    super.setHeight(height);
  }

  // Methods

  clone () {
    return new ForeignObject(
      this.getX(),
      this.getY(),
      this.getWidth(),
      this.getHeight()
    );
  }
}
