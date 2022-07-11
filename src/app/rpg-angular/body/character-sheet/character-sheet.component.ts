import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FirestoreService } from 'src/services/firestore.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent implements OnInit {
  service$!: any;

  constructor(private firestoreService: FirestoreService, private utilService: UtilService) {}
  ngOnInit(): void {
    this.utilService.characterSheet.subscribe((val) => (this.service$ = val));
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  updateCS(): void {
    this.firestoreService.update(this.service$.id, { ...this.service$ });
  }
}
