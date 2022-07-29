import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAttributes, IFa, IPlayer, ISheet, IWeapon } from 'src/Interfaces/ISheet';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private saving$ = new BehaviorSubject<boolean>(false);
  private sheet$ = new BehaviorSubject<ISheet>({ id: '' });
  private id$ = new BehaviorSubject<string>('');
  private player$ = new BehaviorSubject<IPlayer>({ origin: 'Central Plaza' });
  private attributes$ = new BehaviorSubject<IAttributes | null | undefined>(null);
  private history$ = new BehaviorSubject<string>('');
  private annotations$ = new BehaviorSubject<string>('');
  private weapon$ = new BehaviorSubject<IWeapon[]>([]);
  private fa$ = new BehaviorSubject<IFa>({ id: -1, level: 'D' });

  constructor() {}

  completeService() {
    if (this.sheet$) this.sheet$.complete();
  }

  get characterSheet(): Observable<ISheet> {
    return this.sheet$;
  }
  get id(): Observable<string> {
    return this.id$;
  }
  get player(): Observable<IPlayer> {
    return this.player$;
  }
  get attributes(): Observable<IAttributes | null | undefined> {
    return this.attributes$;
  }
  get history(): Observable<string> {
    return this.history$;
  }
  get annotations(): Observable<string> {
    return this.annotations$;
  }
  get weapon(): Observable<IWeapon[]> {
    return this.weapon$;
  }
  get fa(): Observable<IFa> {
    return this.fa$;
  }
  get saving(): Observable<boolean> {
    return this.saving$;
  }

  changeSheet(sheet: ISheet) {
    if (sheet?.player) {
      this.player$.next(sheet.player);
      this.id$.next(sheet?.id);
      this.attributes$.next(sheet?.attributes);
      this.history$.next(sheet?.history as string);
      this.annotations$.next(sheet?.annotations as string);
      this.weapon$.next(sheet?.weapons as IWeapon[]);
      this.fa$.next(sheet?.fa as IFa);
    }
  }
  changeID(id: string) {
    this.id$.next(id);
  }
  changePlayer(player: IPlayer) {
    this.player$.next(player);
  }
  changeAttributes(attributes: IAttributes) {
    this.attributes$.next(attributes);
  }
  changeHistory(history: string) {
    this.history$.next(history);
  }
  changeAnnotations(annotations: string) {
    this.annotations$.next(annotations);
  }
  changeWeapon(weapon: IWeapon[]) {
    this.weapon$.next(weapon);
  }
  changeFa(fa: IFa) {
    this.fa$.next(fa);
  }
  changeSaving(saving: boolean) {
    this.saving$.next(saving);
  }
}
