import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { TopBarFiltersComponent } from './top-bar-filters.component';

@NgModule({
  declarations: [TopBarFiltersComponent],
  imports: [CommonModule, ReactiveFormsModule, AngularSvgIconModule],
  exports: [TopBarFiltersComponent],
})
export class TopBarFiltersModule {}
