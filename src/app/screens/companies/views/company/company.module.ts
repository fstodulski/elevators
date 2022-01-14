import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CompaniesMapModule } from '../../containers/companies-map/companies-map.module';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { AboutModule } from './components/about/about.module';
import { ContactDetailsModule } from './components/contact-details/contact-details.module';
import { HeaderModule } from './components/header/header.module';
import { ImagesModule } from './components/images/images.module';

export const modules = [
  HeaderModule,
  AboutModule,
  ContactDetailsModule,
  FontAwesomeModule,
  ImagesModule,
];
@NgModule({
  declarations: [CompanyComponent],
  imports: [CommonModule, CompanyRoutingModule, ...modules, CompaniesMapModule],
})
export class CompanyModule {}
