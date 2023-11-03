import { Element } from '../Element.js';

export class Animatable extends Element {
  // Event Handlers

  onBegin (fn, options = undefined) {
    super.Shape().addEventListener('beginEvent', fn, options);

    return this;
  }

  onEnd (fn, options = undefined) {
    super.Shape().addEventListener('endEvent', fn, options);

    return this;
  }

  onRepeat (fn, options = undefined) {
    super.Shape().addEventListener('repeatEvent', fn, options);

    return this;
  }

  // Accessors

  setAttribute (attribute) {
    return super._set('attributeName', attribute);
  }

  getAttribute () {
    return this._getAsString('attributeName');
  }

  setFrom (from) {
    return super._set('from', from);
  }

  getFrom () {
    return this._getAsNumber('from');
  }

  setTo (to) {
    return super._set('to', to);
  }

  getTo () {
    return this._getAsNumber('to');
  }

  setDuration (duration) {
    return super._set('duration', duration);
  }

  getDuration () {
    return this._getAsNumber('duration');
  }

  setRepeat (count) {
    return super._set('repeatCount', count);
  }

  // Methods
  start (time = 0) {
    console.log(super.Shape());
    // super.Shape().beginElementAt(time);
  }
}
