import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TopBarFiltersComponent } from './top-bar-filters.component';

@NgModule({
  declarations: [TopBarFiltersComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TopBarFiltersComponent],
})
export class TopBarFiltersModule {}
