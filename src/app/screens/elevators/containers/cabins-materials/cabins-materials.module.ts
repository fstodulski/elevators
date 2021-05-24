import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import { HeroHeaderModule } from '@shared/components';

import { CabinsMaterialsComponent } from './cabins-materials.component';

export const modules = [
  NbButtonModule,
  DragDropModule,
  NbIconModule,
  HeroHeaderModule,
];

@NgModule({
  declarations: [CabinsMaterialsComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsMaterialsComponent],
})
export class CabinsMaterialsModule {}
