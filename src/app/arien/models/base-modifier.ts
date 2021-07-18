export class BaseModifier {
  value: number;
  source: any;

  constructor(value = 0, source = 'unknown') {
    this.value = value;
    this.source = source;
  }
}
