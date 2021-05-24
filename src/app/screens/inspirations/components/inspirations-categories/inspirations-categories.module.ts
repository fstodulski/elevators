import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InspirationsCategoriesComponent } from './inspirations-categories.component';

export const modules = [];

@NgModule({
  declarations: [InspirationsCategoriesComponent],
  imports: [CommonModule, RouterModule, ...modules],
  exports: [InspirationsCategoriesComponent],
})
export class InspirationsCategoriesModule {}
