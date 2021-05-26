import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { CompaniesMapComponent } from './companies-map.component';

@NgModule({
  declarations: [CompaniesMapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports: [CompaniesMapComponent],
})
export class CompaniesMapModule {}
