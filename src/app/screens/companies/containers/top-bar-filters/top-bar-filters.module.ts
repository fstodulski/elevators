import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbTagModule,
} from '@nebular/theme';

import { TopBarFiltersComponent } from './top-bar-filters.component';

export const modules = [
  NbFormFieldModule,
  NbInputModule,
  NbIconModule,
  NbButtonModule,
  NbTagModule,
];

@NgModule({
  declarations: [TopBarFiltersComponent],
  imports: [CommonModule, ...modules],
  exports: [TopBarFiltersComponent],
})
export class TopBarFiltersModule {}
