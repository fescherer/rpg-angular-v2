import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WeaponClassPipe,
  WeaponDamage,
  WeaponDamageAimed,
  WeaponDamageSpecial,
  WeaponTypePipe,
} from './pipes/weapon';

@NgModule({
  declarations: [WeaponTypePipe, WeaponClassPipe, WeaponDamage, WeaponDamageAimed, WeaponDamageSpecial],
  imports: [CommonModule],
  exports: [WeaponTypePipe, WeaponClassPipe, WeaponDamage, WeaponDamageAimed, WeaponDamageSpecial],
})
export class ShareModule {}
