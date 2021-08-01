import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyPreviewCardModule } from '@shared/components';

import { CompaniesListComponent } from './companies-list.component';
import { CompaniesListRoutingModule } from './companies-list-routing.module';

export const modules = [CompanyPreviewCardModule];

@NgModule({
  declarations: [CompaniesListComponent],
  imports: [CommonModule, CompaniesListRoutingModule, ...modules],
})
export class CompaniesListModule {}
