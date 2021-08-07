import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainNavigationModule, MobileNavigationModule } from '../../navigation';
import { TopBarHeaderComponent } from './top-bar-header.component';

export const modules = [MainNavigationModule, MobileNavigationModule];

@NgModule({
  declarations: [TopBarHeaderComponent],
  imports: [CommonModule, RouterModule, ...modules],
  exports: [TopBarHeaderComponent],
})
export class TopBarHeaderModule {}
