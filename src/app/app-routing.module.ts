import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponPageComponent } from './components/weapons-list/weapon-page/weapon-page.component';
import { BodyComponent } from './rpg-angular/body/body.component';
import { CharacterSheetComponent } from './rpg-angular/body/character-sheet/character-sheet.component';
import { HomeComponent } from './rpg-angular/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'page/:id',
    component: BodyComponent,
    children: [
      {
        path: '',
        component: CharacterSheetComponent,
      },
      {
        path: 'create-weapon',
        component: WeaponPageComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
