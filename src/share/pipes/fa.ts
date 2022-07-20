import { Pipe, PipeTransform } from '@angular/core';
import { faDataa } from '../../app/components/player-fa/fa';

@Pipe({
  name: 'faLevel',
})
export class faPipe implements PipeTransform {
  transform(value: number): any {
    // @ts-ignore
    return faDataa[value];
  }
}
