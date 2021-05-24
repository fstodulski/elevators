import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCheckboxModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
} from '@nebular/theme';

import { EmailCatalogComponent } from './email-catalog.component';

export const modules = [
  NbFormFieldModule,
  NbButtonModule,
  NbInputModule,
  NbIconModule,
  NbCheckboxModule,
];

@NgModule({
  imports: [CommonModule, ...modules, ReactiveFormsModule],
  declarations: [EmailCatalogComponent],
  exports: [EmailCatalogComponent],
})
export class EmailCatalogModule {}
