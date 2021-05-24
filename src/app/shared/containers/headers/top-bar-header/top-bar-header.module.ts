import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbIconModule, NbSelectModule } from '@nebular/theme';

import { MainNavigationModule } from '../../navigation';
import { TopBarHeaderComponent } from './top-bar-header.component';

export const modules = [MainNavigationModule, NbSelectModule, NbIconModule];

@NgModule({
  declarations: [TopBarHeaderComponent],
  imports: [CommonModule, ...modules],
  exports: [TopBarHeaderComponent],
})
export class TopBarHeaderModule {}
