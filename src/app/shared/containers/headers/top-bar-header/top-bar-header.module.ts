import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from '@fstodulski/ngx-tetris';

import { MainNavigationModule } from '../../navigation';
import { TopBarHeaderComponent } from './top-bar-header.component';

export const modules = [MainNavigationModule, ButtonsModule];

@NgModule({
  declarations: [TopBarHeaderComponent],
  imports: [CommonModule, ...modules],
  exports: [TopBarHeaderComponent],
})
export class TopBarHeaderModule {}
