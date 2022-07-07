import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area-component',
  templateUrl: './text-area-component.component.html',
  styleUrls: ['./text-area-component.component.scss'],
})
export class TextAreaComponentComponent {
  @Input() type!: 'annotations' | 'history';

  constructor() {}
}
