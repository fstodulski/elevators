import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipModule } from '@shared/components';
import { NgxMasonryModule } from 'ngx-masonry';

import { InspirationsMasonryComponent } from './inspirations-masonry.component';

export const modules = [ChipModule, NgxMasonryModule];

@NgModule({
  declarations: [InspirationsMasonryComponent],
  imports: [CommonModule, ...modules],
  exports: [InspirationsMasonryComponent],
})
export class InspirationsMasonryModule {}
