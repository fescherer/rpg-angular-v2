import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  changeTheme(): void {
    let theme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'dark' ? 'light' : 'dark'
    );
  }
}
