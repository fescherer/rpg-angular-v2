import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFa, IWeapon } from 'src/Interfaces/ISheet';
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
  weapon$!: IWeapon[];
  annotations$!: string;
  history$!: string;
  fa$!: IFa;

  constructor(
    private firestoreService: FirestoreService,
    private utilService: UtilService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.utilService.characterSheet.subscribe((val) => (this.service$ = val));
    this.utilService.player.subscribe((val) => (this.player$ = val));
    this.utilService.id.subscribe((val) => (this.id$ = val));
    this.utilService.attributes.subscribe((val) => (this.attributes$ = val));
    this.utilService.weapon.subscribe((val) => (this.weapon$ = val));
    this.utilService.annotations.subscribe((val) => (this.annotations$ = val));
    this.utilService.history.subscribe((val) => (this.history$ = val));
    this.utilService.fa.subscribe((val) => (this.fa$ = val));
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
      weapons: this.weapon$,
      history: this.history$,
      annotations: this.annotations$,
      fa: this.fa$,
    });
  }

  deleteCS() {
    const confirm = window.confirm('Você tem certeza?\nPressione OK para apagar a ficha ');
    if (confirm) {
      this.router.navigate(['/']);
      this.firestoreService.delete(this.id$);
    }
  }

  refresh(): void {
    location.reload();
  }
}
