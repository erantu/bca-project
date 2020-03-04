import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    if (value > 1000) {
      return value * (1 - args[0]);
    } else {
      return value;
    }
  }
}
