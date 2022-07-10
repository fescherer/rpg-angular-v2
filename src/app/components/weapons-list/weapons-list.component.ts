import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss'],
})
export class WeaponsListComponent implements OnInit {
  data: any;
  constructor(private utilService: UtilService) {}

  ngOnInit(): void {
    this.data = this.utilService.weaponsList;
  }
}
