import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from '@fstodulski/ngx-tetris';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

import { CabinsHeroComponent } from './cabins-hero.component';

export const modules = [ButtonsModule, NbButtonModule, NbIconModule];

@NgModule({
  declarations: [CabinsHeroComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsHeroComponent],
})
export class CabinsHeroModule {}
