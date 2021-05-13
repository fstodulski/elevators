import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

import { CabinsMaterialsComponent } from './cabins-materials.component';

export const modules = [NbButtonModule, DragDropModule, NbIconModule];

@NgModule({
  declarations: [CabinsMaterialsComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsMaterialsComponent],
})
export class CabinsMaterialsModule {}
