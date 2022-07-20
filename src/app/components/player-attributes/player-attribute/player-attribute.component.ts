import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IAttributes } from 'src/Interfaces/ISheet';

@Component({
  selector: 'app-player-attribute',
  templateUrl: './player-attribute.component.html',
  styleUrls: ['./player-attribute.component.scss'],
})
export class PlayerAttributeComponent implements OnInit {
  @Input() data!: IAttributes | null | undefined | any;
  @Input() type!: string;
  @ViewChild('input') input!: ElementRef;
  fullData!: any;

  constructor(private toastr: ToastrService) {}
  ngOnInit(): void {
    this.fullData = this.data[this.type];
  }

  changeValue() {
    const value = prompt('Please enter your value in NUMBERS please');
    if (value != null && parseInt(value) < 85 && parseInt(value) > 40) {
      this.fullData!.totalValue = value;
    } else {
      this.toastr.error('Precisa ser um número entre 40 e 85', 'Atributo inválido');
    }
  }
}
