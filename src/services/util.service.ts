import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAttribute, IAttributes, IPlayer, ISheet, IWeapon } from 'src/Interfaces/ISheet';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  completeService() {
    if (this.sheet$) this.sheet$.complete();
  }

  private sheet$ = new BehaviorSubject<ISheet>({ id: '' });

  changeSheet(sheet: ISheet) {
    // this.sheet$.next(sheet);
    if (sheet?.player) {
      this.player$.next(sheet.player);
      this.id$.next(sheet?.id);
      this.attributes$.next(sheet?.attributes);
      this.history$.next(sheet?.history as string);
      this.annotations$.next(sheet?.annotations as string);
      this.weapon$.next(sheet?.weapons as IWeapon[]);
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

  private attributes$ = new BehaviorSubject<IAttributes | null | undefined>(null);

  changeAttributes(attributes: IAttributes) {
    this.attributes$.next(attributes);
  }

  get attributes(): Observable<IAttributes | null | undefined> {
    return this.attributes$;
  }

  private history$ = new BehaviorSubject<string>('');

  changeHistory(history: string) {
    this.history$.next(history);
  }

  get history(): Observable<string> {
    return this.history$;
  }

  private annotations$ = new BehaviorSubject<string>('');

  changeAnnotations(annotations: string) {
    this.annotations$.next(annotations);
  }

  get annotations(): Observable<string> {
    return this.annotations$;
  }

  private weapon$ = new BehaviorSubject<IWeapon[]>([]);

  changeWeapon(weapon: IWeapon[]) {
    this.weapon$.next(weapon);
  }

  get weapon(): Observable<IWeapon[]> {
    return this.weapon$;
  }
}
