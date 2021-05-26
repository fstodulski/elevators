import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';


@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
