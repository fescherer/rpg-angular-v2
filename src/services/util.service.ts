import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPlayer, ISheet } from 'src/Interfaces/ISheet';
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

  /*******************************************/

  private sheet$ = new BehaviorSubject<ISheet>({ id: '' });

  changeSheet(sheet: ISheet) {
    // this.sheet$.next(sheet);
    if (sheet?.player) {
      this.player$.next(sheet.player);
      this.id$.next(sheet?.id);
      this.history$.next(sheet?.history as string);
    }
  }

  get characterSheet(): Observable<ISheet> {
    return this.sheet$;
  }

  private id$ = new BehaviorSubject<string>('');

  changeID(id: string) {
    this.id$.next(id);
  }

  get id(): Observable<string> {
    return this.id$;
  }

  private player$ = new BehaviorSubject<IPlayer>({ origin: 'Central Plaza' });

  changePlayer(player: IPlayer) {
    this.player$.next(player);
  }

  get player(): Observable<IPlayer> {
    return this.player$;
  }

  private history$ = new BehaviorSubject<string>('');

  changeHistory(history: string) {
    this.history$.next(history);
  }

  get history(): Observable<string> {
    return this.history$;
  }
}
