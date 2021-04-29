import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { appAlert, ButtonsModule } from '@fstodulski/ngx-tetris';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TopBarHeaderModule } from '@shared/containers';

import { InspirationsCategoriesModule } from './components/inspirations-categories/inspirations-categories.module';
import { InspirationsHeaderModule } from './components/inspirations-header/inspirations-header.module';
import { InspirationsComponent } from './inspirations.component';
import { InspirationsRoutingModule } from './inspirations-routing.module';

export const modules = [
  ButtonsModule,
  SvgIconsModule.forChild([appAlert]),
  TopBarHeaderModule,
  InspirationsHeaderModule,
  InspirationsCategoriesModule,
];

@NgModule({
  declarations: [InspirationsComponent],
  imports: [CommonModule, InspirationsRoutingModule, ...modules],
})
export class InspirationsModule {}
