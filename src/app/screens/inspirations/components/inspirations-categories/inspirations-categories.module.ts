import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChipsModule } from '@fstodulski/ngx-tetris';

import { InspirationsCategoriesComponent } from './inspirations-categories.component';

export const modules = [ChipsModule];

@NgModule({
  declarations: [InspirationsCategoriesComponent],
  imports: [CommonModule, RouterModule, ...modules],
  exports: [InspirationsCategoriesComponent],
})
export class InspirationsCategoriesModule {}
