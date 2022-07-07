import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlayerTraitsComponent } from './player-traits/player-traits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerAttributesComponent } from './player-attributes/player-attributes.component';
import { PlayerAttributeComponent } from './player-attributes/player-attribute/player-attribute.component';

const comps = [FooterComponent, HeaderComponent, PlayerTraitsComponent, PlayerAttributesComponent];

const notExported = [];

@NgModule({
  declarations: [...comps, PlayerAttributeComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [...comps],
})
export class ComponentsModule {}
