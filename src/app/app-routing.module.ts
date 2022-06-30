import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './rpg-angular/body/body.component';
import { HomeComponent } from './rpg-angular/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page/:id', component: BodyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
