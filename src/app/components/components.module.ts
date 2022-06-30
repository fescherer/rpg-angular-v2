import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlayerTraitsComponent } from './player-traits/player-traits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, PlayerTraitsComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent, FormsModule, ReactiveFormsModule, PlayerTraitsComponent],
})
export class ComponentsModule {}
