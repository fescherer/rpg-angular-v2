import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/services/firestore.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent implements OnInit {
  service$!: any;
  player$!: any;
  id$!: any;
  attributes$!: any;

  constructor(private firestoreService: FirestoreService, private utilService: UtilService) {}
  ngOnInit(): void {
    this.utilService.characterSheet.subscribe((val) => {
      this.service$ = val;
    });
    this.utilService.player.subscribe((val) => {
      this.player$ = val;
    });
    this.utilService.id.subscribe((val) => {
      this.id$ = val;
    });
    this.utilService.attributes.subscribe((val) => {
      this.attributes$ = val;
    });
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  updateCS(): void {
    this.firestoreService.update(this.id$, {
      id: this.id$,
      player: this.player$,
      attributes: this.attributes$,
    });
  }

  refresh(): void {
    location.reload();
  }
}
