import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule, tArrowRight } from '@fstodulski/ngx-tetris';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { CabinsHeroComponent } from './cabins-hero.component';

export const modules = [ButtonsModule, SvgIconsModule.forChild([tArrowRight])];

@NgModule({
  declarations: [CabinsHeroComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsHeroComponent],
})
export class CabinsHeroModule {}
