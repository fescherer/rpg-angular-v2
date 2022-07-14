import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs';
import { IAttributes } from 'src/Interfaces/ISheet';
import { UtilService } from 'src/services/util.service';
import { attributes } from './attributes';

@Component({
  selector: 'app-player-attributes',
  templateUrl: './player-attributes.component.html',
  styleUrls: ['./player-attributes.component.scss'],
})
export class PlayerAttributesComponent implements OnInit {
  attributes!: IAttributes | null | undefined;
  constructor(private utilService: UtilService) {}
  ngOnInit(): void {
    this.utilService?.attributes.pipe(skip(1)).subscribe((val) => {
      if (!val) this.utilService.changeAttributes(attributes);
      this.attributes = val;
    });
  }
}
