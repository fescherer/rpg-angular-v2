import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rpg-angular-v2';
  items$: Observable<any[]>;
  constructor(firestore: Firestore) {
    const collectiona = collection(firestore, 'items');
    this.items$ = collectionData(collectiona);
  }
  ngOnInit(): void {
    console.log(this.items$);
  }
}
