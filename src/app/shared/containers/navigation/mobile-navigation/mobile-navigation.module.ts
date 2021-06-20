import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

import { MobileNavigationComponent } from './mobile-navigation.component';

export const modules = [NbButtonModule, NbIconModule];

@NgModule({
  declarations: [MobileNavigationComponent],
  imports: [CommonModule, ...modules],
  exports: [MobileNavigationComponent],
})
export class MobileNavigationModule {}
