import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesMapModule } from './containers/companies-map/companies-map.module';
import { TopBarFiltersModule } from './containers/top-bar-filters/top-bar-filters.module';

export const modules = [TopBarFiltersModule, CompaniesMapModule];

@NgModule({
  declarations: [CompaniesComponent],
  imports: [CommonModule, CompaniesRoutingModule, ...modules],
})
export class CompaniesModule {}
