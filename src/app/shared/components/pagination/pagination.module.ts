import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonsModule,
  tArrowLeft,
  tArrowRight,
  WithContrastModule,
} from '@fstodulski/ngx-tetris';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { PaginationComponent } from './pagination.component';

const modules = [
  ButtonsModule,
  WithContrastModule,
  SvgIconsModule.forChild([tArrowRight, tArrowLeft]),
];

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, ...modules],
  exports: [PaginationComponent],
})
export class PaginationModule {}
