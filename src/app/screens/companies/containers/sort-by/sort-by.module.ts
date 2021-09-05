import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SortByComponent } from './sort-by.component';

@NgModule({
  declarations: [SortByComponent],
  imports: [CommonModule],
  exports: [SortByComponent],
})
export class SortByModule {}
