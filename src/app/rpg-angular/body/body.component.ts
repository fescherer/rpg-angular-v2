import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ISheet } from 'src/Interfaces/ISheet';
import { FirestoreService } from 'src/services/firestore.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, OnDestroy {
  id!: string;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private utilService: UtilService,
  ) {
    this.id = this.router.url.split('/')[2];
  }

  ngOnInit(): void {
    this.loadSheet();
    this.isSheetAlreadyCreated();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async isSheetAlreadyCreated() {
    (await this.firestoreService.getsheet(this.id))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((sheet: any) => {
        if (sheet) this.utilService.changeSheet(sheet);
        else {
          this.firestoreService.create(this.id);
          this.utilService.changeID(this.id);
        }
      });
  }

  loadSheet(): void {
    this.utilService.characterSheet.subscribe((val) => console.log('load', val));
  }
}
