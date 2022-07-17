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

@NgModule({
  declarations: [
    WeaponTypePipe,
    WeaponClassPipe,
    WeaponDamage,
    WeaponDamageAimed,
    WeaponDamageSpecial,
    calcExtremePartPipe,
  ],
  imports: [CommonModule],
  exports: [
    WeaponTypePipe,
    WeaponClassPipe,
    WeaponDamage,
    WeaponDamageAimed,
    WeaponDamageSpecial,
    calcExtremePartPipe,
  ],
})
export class ShareModule {}
