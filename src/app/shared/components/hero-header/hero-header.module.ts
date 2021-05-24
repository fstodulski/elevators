import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroHeaderComponent } from './hero-header.component';

@NgModule({
  declarations: [HeroHeaderComponent],
  imports: [CommonModule],
  exports: [HeroHeaderComponent],
})
export class HeroHeaderModule {}
