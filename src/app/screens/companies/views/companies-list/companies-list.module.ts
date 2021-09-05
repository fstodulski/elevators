import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyPreviewCardModule } from '@shared/components';

import { SortByModule } from '../../containers/sort-by/sort-by.module';
import { CompaniesListComponent } from './companies-list.component';
import { CompaniesListRoutingModule } from './companies-list-routing.module';

export const modules = [CompanyPreviewCardModule, SortByModule];

@NgModule({
  declarations: [CompaniesListComponent],
  imports: [CommonModule, CompaniesListRoutingModule, ...modules],
})
export class CompaniesListModule {}
