import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipModule } from '@shared/components';

import { CabinsRealisationComponent } from './cabins-realisation.component';

const modules = [ChipModule];

@NgModule({
  declarations: [CabinsRealisationComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsRealisationComponent],
})
export class CabinsRealisationModule {}
