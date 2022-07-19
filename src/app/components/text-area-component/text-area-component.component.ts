import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil, skip, take, debounceTime } from 'rxjs';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-text-area-component',
  templateUrl: './text-area-component.component.html',
  styleUrls: ['./text-area-component.component.scss'],
})
export class TextAreaComponentComponent implements OnInit, OnDestroy {
  @Input() type!: 'annotations' | 'history';

  text = new FormControl('');

  private unsubscribe$ = new Subject<void>();

  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.init();
    this.onFormInit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onFormInit() {
    this.text?.valueChanges.pipe(debounceTime(500), takeUntil(this.unsubscribe$)).subscribe(() => {
      if (this.type === 'annotations') this.utilService.changeAnnotations(this.text.value as string);
      else this.utilService.changeHistory(this.text.value as string);
    });
  }

  init(): void {
    const service = this.type === 'annotations' ? this.utilService.annotations : this.utilService.history;

    service
      .pipe(takeUntil(this.unsubscribe$), skip(1), take(1))
      .subscribe((text: string) => this.text.setValue(text as string));
  }
}
