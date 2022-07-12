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

  constructor(private firestoreService: FirestoreService, private utilService: UtilService) {}
  ngOnInit(): void {
    this.utilService.characterSheet.subscribe((val) => {
      console.log('Ficha: ', val);
      this.service$ = val;
    });
    this.utilService.player.subscribe((val) => {
      console.log('Player: ', val);
      this.player$ = val;
    });
    this.utilService.id.subscribe((val) => {
      console.log('id:', val);
      this.id$ = val;
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
    console.log(this.player$, this.id$);
    this.firestoreService.update(this.id$, { id: this.id$, player: this.player$ });
  }

  refresh(): void {
    location.reload();
  }
}
