import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InspirationsHeaderComponent } from './inspirations-header.component';

@NgModule({
  declarations: [InspirationsHeaderComponent],
  imports: [CommonModule],
  exports: [InspirationsHeaderComponent],
})
export class InspirationsHeaderModule {}
