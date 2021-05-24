import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { HeroHeaderModule } from '@shared/components';

import { CabinsHeroComponent } from './cabins-hero.component';

export const modules = [NbButtonModule, NbIconModule, HeroHeaderModule];

@NgModule({
  declarations: [CabinsHeroComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsHeroComponent],
})
export class CabinsHeroModule {}
