import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-weapon-page',
  templateUrl: './weapon-page.component.html',
  styleUrls: ['./weapon-page.component.scss'],
})
export class WeaponPageComponent implements OnInit, OnDestroy {
  weaponForm = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl(''),
    description: new FormControl('', Validators.required),
    type: new FormControl('melee-light', Validators.required),
    class: new FormControl('d', Validators.required),
  });
  data: any;

  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router, private activeRoute: ActivatedRoute, private utilService: UtilService) {}

  ngOnInit(): void {
    this.utilService.weapon.pipe(takeUntil(this.unsubscribe$)).subscribe((weapons) => (this.data = weapons));
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  add(): void {
    if (this.weaponForm.valid) {
      this.data.push(this.weaponForm.value);
      this.utilService.changeWeapon(this.data);
      this.router.navigate(['.'], { relativeTo: this.activeRoute.parent });
    }
  }
}
