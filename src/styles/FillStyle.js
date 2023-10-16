import { Style } from './Style.js';

export class FillStyle extends Style {
  constructor ({ fill = 'black', fillOpacity = 1, fillRule = 'nonzero' }) {
    super();
    this.fill = fill;
    this.fillOpacity = fillOpacity;
    this.fillRule = fillRule;
  }
}
