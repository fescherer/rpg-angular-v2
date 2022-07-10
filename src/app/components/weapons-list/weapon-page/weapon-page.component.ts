import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-weapon-page',
  templateUrl: './weapon-page.component.html',
  styleUrls: ['./weapon-page.component.scss'],
})
export class WeaponPageComponent {
  weaponForm = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl(''),
    description: new FormControl('', Validators.required),
    type: new FormControl('melee-light', Validators.required),
    class: new FormControl('d', Validators.required),
  });

  constructor(private router: Router, private activeRoute: ActivatedRoute, private utilService: UtilService) {}

  add(): void {
    if (this.weaponForm.valid) {
      this.utilService.addWeapon(this.weaponForm.value);
      this.router.navigate(['.'], { relativeTo: this.activeRoute.parent });
    }
  }
}
