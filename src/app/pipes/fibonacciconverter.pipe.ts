import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibonacciconverter',
})
export class FebonacciconverterPipe implements PipeTransform {
  transform(value: number): number {
    return fibonacci(value);
  }
}
function fibonacci(value: number): number {
  var n1 = 0;
  var n2 = 1;
  var sum = 0;
  var i = 0;
  if (value == 1) {
    return n1;
  } else if (value == 2) {
    return n2;
  } else {
    for (i = 3; i <= value; i++) {
      sum = n1 + n2;
      n1 = n2;
      n2 = sum;
    }
    return sum;
  }
}
