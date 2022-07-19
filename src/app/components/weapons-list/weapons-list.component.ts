import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss'],
})
export class WeaponsListComponent implements OnInit, OnDestroy {
  data: any;

  private unsubscribe$ = new Subject<void>();
  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.utilService.weapon.pipe(takeUntil(this.unsubscribe$)).subscribe((weapons) => (this.data = weapons));
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
