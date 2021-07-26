import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyPreviewCardComponent } from './company-preview-card.component';

export const modules = [];

@NgModule({
  declarations: [CompanyPreviewCardComponent],
  imports: [CommonModule, ...modules],
  exports: [CompanyPreviewCardComponent],
})
export class CompanyPreviewCardModule {}
