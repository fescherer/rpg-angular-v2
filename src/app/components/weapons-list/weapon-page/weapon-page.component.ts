import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weapon-page',
  templateUrl: './weapon-page.component.html',
  styleUrls: ['./weapon-page.component.scss'],
})
export class WeaponPageComponent {
  weaponForm = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
    description: new FormControl(''),
    damage: new FormControl(''),
  });

  constructor() {}
}
