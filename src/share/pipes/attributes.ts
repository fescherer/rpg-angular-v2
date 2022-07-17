import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcExtreme',
})
export class calcExtremePartPipe implements PipeTransform {
  transform(value: string): number {
    // @ts-ignore
    return parseInt(value) / 4;
  }
}
