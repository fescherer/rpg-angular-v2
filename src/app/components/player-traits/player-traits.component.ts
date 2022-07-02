import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-player-traits',
  templateUrl: './player-traits.component.html',
  styleUrls: ['./player-traits.component.scss'],
})
export class PlayerTraitsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.onFormInit();
  }
  private unsubscribe$ = new Subject<void>();
  name = new FormControl('');

  onFormInit() {
    this.name.valueChanges.pipe(debounceTime(500), takeUntil(this.unsubscribe$)).subscribe((name) => {
      console.log(name);
    });
  }
}
