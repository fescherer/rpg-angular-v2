import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlayerTraitsComponent } from './player-traits/player-traits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerAttributesComponent } from './player-attributes/player-attributes.component';
import { PlayerAttributeComponent } from './player-attributes/player-attribute/player-attribute.component';
import { TextAreaComponentComponent } from './text-area-component/text-area-component.component';
import { WeaponsListComponent } from './weapons-list/weapons-list.component';
import { WeaponCardComponent } from './weapons-list/weapon-card/weapon-card.component';
import { WeaponPageComponent } from './weapons-list/weapon-page/weapon-page.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from 'src/share/share.module';
import { PlayerFaComponent } from './player-fa/player-fa.component';

const comps = [
  FooterComponent,
  HeaderComponent,
  PlayerTraitsComponent,
  PlayerAttributesComponent,
  TextAreaComponentComponent,
  WeaponsListComponent,
  PlayerFaComponent,
];

const notExported = [PlayerAttributeComponent, WeaponCardComponent];

@NgModule({
  declarations: [...comps, ...notExported, WeaponPageComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, ShareModule],
  exports: [...comps],
})
export class ComponentsModule {}
