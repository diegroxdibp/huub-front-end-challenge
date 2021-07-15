import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minMax'
})
export class MinMaxPipe implements PipeTransform {

  transform(value: number, max: number): number {
    let result: number;
    if (value < 0) {
      result = 0;
    } else if (value > max) {
      result = max;
    }
    return result;
  }
}
