import { Component, Input, OnInit } from '@angular/core';
import { IAttribute, IAttributes } from 'src/Interfaces/ISheet';

@Component({
  selector: 'app-player-attribute',
  templateUrl: './player-attribute.component.html',
  styleUrls: ['./player-attribute.component.scss'],
})
export class PlayerAttributeComponent implements OnInit {
  @Input() data!: IAttributes | null | undefined | any;
  @Input() type!: string;

  fullData!: any;

  constructor() {}
  ngOnInit(): void {
    this.fullData = this.data[this.type];
  }

  changeValue() {
    const value = prompt('Please enter your value in NUMBERS please');
    if (value != null && parseInt(value)) {
      document!.getElementById('demo')!.innerHTML = value;
    }
  }
}
