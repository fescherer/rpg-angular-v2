import { Component, HostListener } from '@angular/core';
import { MobileService } from 'src/services/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rpg-angular-v2';

  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler(event: any) {
  //   console.log(event);
  //   return false;
  // }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileService.nextIsMobile(window.innerWidth);
  }
  constructor(private mobileService: MobileService) {}
}
