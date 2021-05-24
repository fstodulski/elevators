import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from '@fstodulski/ngx-tetris';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { HeroHeaderModule } from '@shared/components';

import { CabinsHeroComponent } from './cabins-hero.component';

export const modules = [
  ButtonsModule,
  NbButtonModule,
  NbIconModule,
  HeroHeaderModule,
];

@NgModule({
  declarations: [CabinsHeroComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsHeroComponent],
})
export class CabinsHeroModule {}
