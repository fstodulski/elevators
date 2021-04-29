import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainNavigationComponent } from './main-navigation.component';

@NgModule({
  declarations: [MainNavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainNavigationComponent],
})
export class MainNavigationModule {}
