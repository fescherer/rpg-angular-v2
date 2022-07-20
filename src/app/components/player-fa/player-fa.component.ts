import { Component, OnInit } from '@angular/core';
import { IFa } from 'src/Interfaces/ISheet';
import { MobileService } from 'src/services/mobile.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-player-fa',
  templateUrl: './player-fa.component.html',
  styleUrls: ['./player-fa.component.scss'],
})
export class PlayerFaComponent implements OnInit {
  isFaImgHide: boolean = false;
  isPoemType: boolean = false;
  mobile: any;
  fa!: IFa;

  constructor(private mobileService: MobileService, private utilService: UtilService) {}
  ngOnInit(): void {
    this.mobileService.isMobile.subscribe((mobile) => (this.mobile = mobile));
    this.utilService.fa.subscribe((fa) => (this.fa = fa));
  }
}
