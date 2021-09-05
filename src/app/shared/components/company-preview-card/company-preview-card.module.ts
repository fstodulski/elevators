import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CompanyPreviewCardComponent } from './company-preview-card.component';

export const modules = [];

@NgModule({
  declarations: [CompanyPreviewCardComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, ...modules],
  exports: [CompanyPreviewCardComponent],
})
export class CompanyPreviewCardModule {}
