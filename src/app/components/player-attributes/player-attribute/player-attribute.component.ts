import { Component, Input, OnInit } from '@angular/core';
import { IAttributeComponent } from 'src/Interfaces/IAttributes';

@Component({
  selector: 'app-player-attribute',
  templateUrl: './player-attribute.component.html',
  styleUrls: ['./player-attribute.component.scss'],
})
export class PlayerAttributeComponent {
  @Input() data!: IAttributeComponent;

  constructor() {}
}
