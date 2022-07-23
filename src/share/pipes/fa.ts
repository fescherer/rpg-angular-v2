import { Pipe, PipeTransform } from '@angular/core';
import { faDataa } from '../../app/components/player-fa/fa';

export const faNumbers = {
  A: 3,
  B: 2,
  C: 1,
  D: 0,
};

@Pipe({
  name: 'faLevel',
})
export class faPipe implements PipeTransform {
  transform(value: number): any {
    // @ts-ignore
    return faDataa[value];
  }
}

@Pipe({
  name: 'faLevelNumber',
})
export class faPipeNumber implements PipeTransform {
  transform(value: string): number {
    // @ts-ignore
    return faNumbers[value];
  }
}
