import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private toastr: ToastrService, private firestoreService: FirestoreService) {}

  showSuccess() {
    // this.firestoreService.createCharacterSheet({ id: '2', name: 'fe' });
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
}
