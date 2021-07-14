import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbIconModule } from '@nebular/theme';

import { CompanyPreviewCardComponent } from './company-preview-card.component';

export const modules = [NbIconModule];

@NgModule({
  declarations: [CompanyPreviewCardComponent],
  imports: [CommonModule, ...modules],
  exports: [CompanyPreviewCardComponent],
})
export class CompanyPreviewCardModule {}
