import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IWeapon } from 'src/Interfaces/ISheet';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.scss'],
})
export class WeaponCardComponent implements OnInit, OnDestroy {
  @Input() data?: IWeapon = {};
  weapons!: IWeapon[];

  changeSide: boolean = false;

  private unsubscribe$ = new Subject<void>();
  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.utilService.weapon.pipe(takeUntil(this.unsubscribe$)).subscribe((weapons) => (this.weapons = weapons));
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  closeCard(): void {
    const newArray = this.weapons.filter((val) => val.name !== this.data?.name);
    this.utilService.changeWeapon(newArray);
  }
}
