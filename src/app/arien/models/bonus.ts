export class Bonus {
  value: number;
  source: string;
  description: string;
  tags: Array<string>;

  constructor(value: number = 0, source: string = 'unknown', description: string = 'unknown', tags = []) {
    this.value = value;
    this.source = source;
    this.description = description;
    this.tags = tags;
  }
}
