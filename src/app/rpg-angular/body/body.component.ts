import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FirestoreService } from 'src/services/firestore.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, OnDestroy {
  id!: string;
  saving: boolean = true;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private utilService: UtilService,
  ) {
    this.id = this.router.url.split('/')[2];
  }

  async ngOnInit(): Promise<void> {
    await this.isSheetAlreadyCreated();
    this.utilService.saving.pipe(takeUntil(this.unsubscribe$)).subscribe((saving) => (this.saving = saving));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async isSheetAlreadyCreated() {
    (await this.firestoreService.getsheet(this.id))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((sheet: any) => {
        console.log(sheet);
        if (sheet) this.utilService.changeSheet(sheet);
        else {
          this.firestoreService.create(this.id);
          this.utilService.changeID(this.id);
        }
      });
  }
}
