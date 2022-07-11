import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISheet } from 'src/Interfaces/ISheet';
import { IWeapon } from 'src/Interfaces/IWeapon';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private weaponsList$ = new BehaviorSubject<IWeapon>({});

  constructor() {}

  completeService() {
    if (this.weaponsList$) this.weaponsList$.complete();
    if (this.sheet$) this.sheet$.complete();
  }

  // get weaponsList(): Observable<IWeapon> {
  //   return this.weaponsList$;
  // }

  change(weapon: IWeapon) {
    this.weaponsList$.next(weapon);
  }

  weaponList: IWeapon[] = [];
  idCounter: number = this.weaponList.length + 1;

  addWeapon(weapon: IWeapon): void {
    this.weaponList.push({ id: this.idCounter, ...weapon });
    this.idCounter += 1;
  }

  removeWeapon(id: number): void {
    this.weaponList = this.weaponList.filter(function (weapon: IWeapon) {
      return weapon?.id !== id;
    });
  }

  get weaponsList(): IWeapon[] {
    return this.weaponList;
  }

  private sheet$ = new BehaviorSubject<ISheet>({ id: '' });

  changeSheet(sheet: ISheet) {
    this.sheet$.next(sheet);
  }

  get characterSheet(): Observable<ISheet> {
    return this.sheet$;
  }
}
