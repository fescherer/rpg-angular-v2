import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  theme: string | null = document.documentElement.getAttribute('data-theme') || 'light';
  constructor() {}

  changeTheme(): void {
    let theme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    this.theme = theme === 'dark' ? 'light' : 'dark';
  }

  openNav() {
    // @ts-ignore
    document.getElementById('mySidenav').style.width = '250px';
  }

  openNav2() {
    // @ts-ignore
    document.getElementById('mySidenav').style.display = 'flex';
    // @ts-ignore
    document.getElementById('mySidenav').style.zIndex = 20;
    // @ts-ignore
    document.getElementById('overlay').style.display = 'block';
  }

  closeNav() {
    // @ts-ignore
    document.getElementById('mySidenav').style.width = '0';
  }

  closeNav2() {
    // @ts-ignore
    document.getElementById('mySidenav').style.display = 'none';
    // @ts-ignore
    document.getElementById('mySidenav').style.zIndex = 1;
    // @ts-ignore
    document.getElementById('overlay').style.display = 'none';
  }
}
