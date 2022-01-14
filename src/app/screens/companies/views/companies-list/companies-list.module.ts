import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyPreviewCardModule } from '@shared/components';

import { CompaniesMapModule } from '../../containers/companies-map/companies-map.module';
import { SortByModule } from '../../containers/sort-by/sort-by.module';
import { CompaniesListComponent } from './companies-list.component';
import { CompaniesListRoutingModule } from './companies-list-routing.module';
import { MobileMapModule } from './components/mobile-map/mobile-map.module';

export const modules = [
  CompanyPreviewCardModule,
  SortByModule,
  MobileMapModule,
];

@NgModule({
  declarations: [CompaniesListComponent],
  imports: [
    CommonModule,
    CompaniesListRoutingModule,
    ...modules,
    CompaniesMapModule,
  ],
})
export class CompaniesListModule {}
