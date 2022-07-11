import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { FirestoreService } from 'src/services/firestore.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-player-traits',
  templateUrl: './player-traits.component.html',
  styleUrls: ['./player-traits.component.scss'],
})
export class PlayerTraitsComponent implements OnInit, OnChanges {
  @Input() data: any;
  name = new FormControl('');

  private unsubscribe$ = new Subject<void>();

  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.onFormInit();
    if (this.data?.name) this.name.setValue(this.data?.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['data']?.currentValue?.name != changes?.['data']?.previousValue?.name)
      this.name.setValue(this.data?.name);
  }

  onFormInit() {
    this.name.valueChanges.pipe(debounceTime(500), takeUntil(this.unsubscribe$)).subscribe((name) => {
      this.utilService.changeSheet({ ...this.data, name: name });
    });
  }
}
