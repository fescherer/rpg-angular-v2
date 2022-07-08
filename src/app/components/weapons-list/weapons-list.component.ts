import { Component } from '@angular/core';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss'],
})
export class WeaponsListComponent {
  data = [
    {
      type: 'machineGun',
      class: 'A',
      name: 'Espada Plasmática',
      description: 'lorem loremloremloremlor emloremloremloremloremloremloremloremloremloremloremloremlorem',
      damage: 'D6',
      aimed: 'Metade dos dados é sempre 2',
    },
    {
      type: 'machineGun',
      class: 'A',
      name: 'Espada Plasmática',
      description: 'lorem loremloremloremlor emloremloremloremloremloremloremloremloremloremloremloremlorem',
      damage: 'D6',
      aimed: 'Metade dos dados é sempre 2',
    },
  ];
  constructor() {}
}
