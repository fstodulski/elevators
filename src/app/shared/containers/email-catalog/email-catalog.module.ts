import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EmailCatalogComponent } from './email-catalog.component';

export const modules = [];

@NgModule({
  imports: [CommonModule, ...modules, ReactiveFormsModule],
  declarations: [EmailCatalogComponent],
  exports: [EmailCatalogComponent],
})
export class EmailCatalogModule {}
