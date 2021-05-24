import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroHeaderModule } from '@shared/components';

import { CabinsDetailsComponent } from './cabins-details.component';

export const modules = [HeroHeaderModule];

@NgModule({
  declarations: [CabinsDetailsComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsDetailsComponent],
})
export class CabinsDetailsModule {}
