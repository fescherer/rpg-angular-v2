import { Component, OnInit } from '@angular/core';
import { attributes } from './attributes';

@Component({
  selector: 'app-player-attributes',
  templateUrl: './player-attributes.component.html',
  styleUrls: ['./player-attributes.component.scss'],
})
export class PlayerAttributesComponent {
  attributes = attributes;
  constructor() {}
}
