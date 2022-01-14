import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompaniesMapModule } from '../../../../containers/companies-map/companies-map.module';
import { MobileMapComponent } from './mobile-map.component';

@NgModule({
  declarations: [MobileMapComponent],
  imports: [CommonModule, CompaniesMapModule],
  exports: [MobileMapComponent],
})
export class MobileMapModule {}
