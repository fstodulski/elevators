import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbIconModule } from '@nebular/theme';

import { CompaniesListComponent } from './companies-list.component';
import { CompaniesListRoutingModule } from './companies-list-routing.module';

export const modules = [NbIconModule];

@NgModule({
  declarations: [CompaniesListComponent],
  imports: [CommonModule, CompaniesListRoutingModule, ...modules],
})
export class CompaniesListModule {}
