import { Vector2 } from './containers/vector/Vector2.js';

export class Conversions {
  static cartesianToPolar (xCoordinate, yCoordinate) {
    let x, y;

    if (xCoordinate instanceof Vector2) {
      x = xCoordinate.getX();
      y = xCoordinate.getY();
    } else {
      x = xCoordinate;
      y = yCoordinate;
    }

    const r = Math.hypot(x, y);
    const angle = Math.atan2(y, x);

    return { r, angle };
  }

  static polarToCartesian (r, angle) {
    let radius, polarAngle;

    if (r instanceof Vector2) {
      radius = r.getX();
      polarAngle = r.getY();
    } else {
      radius = r;
      polarAngle = angle;
    }

    const x = radius * Math.cos(polarAngle);
    const y = radius * Math.sin(polarAngle);

    return { x, y };
  }
}
