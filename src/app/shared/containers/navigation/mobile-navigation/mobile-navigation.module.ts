import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CompanyPreviewCardModule } from '@shared/components';

import { MobileNavigationComponent } from './mobile-navigation.component';

export const modules = [];

@NgModule({
  declarations: [MobileNavigationComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    CompanyPreviewCardModule,
    ...modules,
  ],
  exports: [MobileNavigationComponent],
})
export class MobileNavigationModule {}
