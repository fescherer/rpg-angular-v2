import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlayerTraitsComponent } from './player-traits/player-traits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const comps = [FooterComponent, HeaderComponent, PlayerTraitsComponent];

const notExported = [];

@NgModule({
  declarations: [...comps],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [...comps],
})
export class ComponentsModule {}
