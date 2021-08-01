import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroHeaderModule } from '@shared/components';

import { CabinsHeroComponent } from './cabins-hero.component';

export const modules = [HeroHeaderModule];

@NgModule({
  declarations: [CabinsHeroComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsHeroComponent],
})
export class CabinsHeroModule {}
