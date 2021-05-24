import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

import { PaginationComponent } from './pagination.component';

const modules = [NbButtonModule, NbIconModule];

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, ...modules],
  exports: [PaginationComponent],
})
export class PaginationModule {}
