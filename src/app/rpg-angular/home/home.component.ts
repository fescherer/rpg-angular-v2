import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private toastr: ToastrService,
    private firestoreService: FirestoreService,
    private router: Router,
  ) {}

  showSuccess() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
  id = new FormControl('', Validators.required);

  submit(): void {
    if (this.id.value && this.id.valid) {
      this.firestoreService.create(this.id.value).then(() => this.router.navigate([`/page/${this.id.value}`]));
    }
  }
}
