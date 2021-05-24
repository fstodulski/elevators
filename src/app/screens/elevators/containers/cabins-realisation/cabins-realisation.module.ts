import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbTableModule, NbTagModule } from '@nebular/theme';
import { ChipModule, HeroHeaderModule } from '@shared/components';

import { CabinsRealisationComponent } from './cabins-realisation.component';

const modules = [ChipModule, NbTagModule, NbTableModule, HeroHeaderModule];

@NgModule({
  declarations: [CabinsRealisationComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsRealisationComponent],
})
export class CabinsRealisationModule {}
