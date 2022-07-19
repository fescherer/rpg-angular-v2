import { Component, OnDestroy, OnInit } from '@angular/core';
import { skip, Subject, takeUntil } from 'rxjs';
import { IAttributes } from 'src/Interfaces/ISheet';
import { UtilService } from 'src/services/util.service';
import { attributes } from './attributes';

@Component({
  selector: 'app-player-attributes',
  templateUrl: './player-attributes.component.html',
  styleUrls: ['./player-attributes.component.scss'],
})
export class PlayerAttributesComponent implements OnInit, OnDestroy {
  attributes!: IAttributes | null | undefined;

  private unsubscribe$ = new Subject<void>();
  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.utilService?.attributes.pipe(skip(1), takeUntil(this.unsubscribe$)).subscribe((val) => {
      if (!val) this.utilService.changeAttributes(attributes);
      this.attributes = val;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
