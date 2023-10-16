import { Animatable } from './Animatable.js';

export class Animate extends Animatable {
  constructor (attribute, from, to, duration, repeat = 'indefinite') {
    super(document.createElementNS('http://www.w3.org/2000/svg', 'animate'));

    super.setAttribute(attribute);
    super.setFrom(from);
    super.setTo(to);
    super.setDuration(duration);
    super.setRepeat(repeat);
    super.start();
  }
}
