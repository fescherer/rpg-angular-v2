import { Component, Input } from '@angular/core';
import { IWeapon } from 'src/Interfaces/IWeapon';

@Component({
  selector: 'app-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.scss'],
})
export class WeaponCardComponent {
  @Input() data: IWeapon = {};
  constructor() {}

  closeCard(): void {}
}
