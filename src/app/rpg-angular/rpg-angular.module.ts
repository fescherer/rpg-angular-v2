import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpgAngularRoutingModule } from './rpg-angular-routing.module';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [BodyComponent, HomeComponent],
  imports: [CommonModule, RpgAngularRoutingModule, ComponentsModule],
})
export class RpgAngularModule {}
