import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroHeaderModule } from '@shared/components';

import { CabinsMaterialsComponent } from './cabins-materials.component';

export const modules = [DragDropModule, HeroHeaderModule];

@NgModule({
  declarations: [CabinsMaterialsComponent],
  imports: [CommonModule, ...modules],
  exports: [CabinsMaterialsComponent],
})
export class CabinsMaterialsModule {}
