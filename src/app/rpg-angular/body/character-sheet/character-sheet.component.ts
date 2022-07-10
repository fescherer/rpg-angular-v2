import { Component } from '@angular/core';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent {
  constructor(private firestoreService: FirestoreService) {}

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  updateCH(): void {
    this.firestoreService.create();
  }
}
