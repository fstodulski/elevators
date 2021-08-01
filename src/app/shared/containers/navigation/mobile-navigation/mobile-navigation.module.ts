import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MobileNavigationComponent } from './mobile-navigation.component';

export const modules = [];

@NgModule({
  declarations: [MobileNavigationComponent],
  imports: [CommonModule, ...modules],
  exports: [MobileNavigationComponent],
})
export class MobileNavigationModule {}
