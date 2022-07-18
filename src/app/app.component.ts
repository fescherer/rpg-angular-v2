import { Component, HostListener } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rpg-angular-v2';

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any) {
    console.log(event);
    return false;
  }
  constructor() {}
}
