import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopBarFiltersComponent } from './top-bar-filters.component';

@NgModule({
  declarations: [TopBarFiltersComponent],
  imports: [CommonModule],
  exports: [TopBarFiltersComponent],
})
export class TopBarFiltersModule {}
