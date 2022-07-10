import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpgAngularRoutingModule } from './rpg-angular-routing.module';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CharacterSheetComponent } from './body/character-sheet/character-sheet.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BodyComponent, HomeComponent, CharacterSheetComponent],
  imports: [CommonModule, RpgAngularRoutingModule, ComponentsModule, ReactiveFormsModule],
})
export class RpgAngularModule {}
