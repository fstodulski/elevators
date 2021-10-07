import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  imports: [CommonModule, CompanyRoutingModule, ...modules],
})
export class CompanyModule {}
