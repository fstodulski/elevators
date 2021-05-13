import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule } from '@nebular/theme';

import { TableOneComponent } from './table-one.component';

export const modules = [CdkTableModule, NbButtonModule];

@NgModule({
  declarations: [TableOneComponent],
  imports: [CommonModule, ...modules],
  exports: [TableOneComponent],
})
export class TableOneModule {}
