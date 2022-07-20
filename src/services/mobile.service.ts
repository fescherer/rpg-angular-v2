import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private isMobile$ = new BehaviorSubject<boolean>(window.innerWidth < 750 ? true : false);

  constructor() {}

  completeService() {
    if (this.isMobile$) this.isMobile$.complete();
  }

  get isMobile(): Observable<any> {
    return this.isMobile$;
  }

  nextIsMobile(size: any) {
    this.isMobile$.next(size < 750 ? true : false);
  }
}
