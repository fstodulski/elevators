import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonsModule,
  tDragIndicator,
  tOpenInNew,
  WithContrastModule,
} from '@fstodulski/ngx-tetris';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { CabinsMaterialsComponent } from './cabins-materials.component';

export const modules = [
  ButtonsModule,
  WithContrastModule,
  DragDropModule,
  SvgIconsModule.forChild([tOpenInNew, tDragIndicator]),
];

@NgModule({
  declarations: [CabinsMaterialsComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsMaterialsComponent],
})
export class CabinsMaterialsModule {}
