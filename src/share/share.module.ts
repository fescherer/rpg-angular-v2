import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponClassPipe,
  WeaponDamage,
  WeaponDamageAimed,
  WeaponDamageSpecial,
  WeaponTypePipe,
} from './pipes/weapon';
import { calcExtremePartPipe } from './pipes/attributes';
import { faPipe } from './pipes/fa';
import { HideMissingDirective } from './directives/imgerror';

const comps = [
  WeaponTypePipe,
  WeaponClassPipe,
  calcExtremePartPipe,
  faPipe,
  WeaponDamageSpecial,
  WeaponDamageAimed,
  WeaponDamage,
  HideMissingDirective,
];

const notExported = [];

@NgModule({
  declarations: [...comps],
  imports: [CommonModule],
  exports: [...comps],
})
export class ShareModule {}
