import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpgAngularModule } from './rpg-angular/rpg-angular.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RpgAngularModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
