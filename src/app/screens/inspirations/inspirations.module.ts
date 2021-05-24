import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule, PaginationModule } from '@shared/components';
import { TopBarHeaderModule } from '@shared/containers';

import { InspirationsCategoriesModule } from './components/inspirations-categories/inspirations-categories.module';
import { InspirationsHeaderModule } from './components/inspirations-header/inspirations-header.module';
import { InspirationsMasonryModule } from './components/inspirations-masonry/inspirations-masonry.module';
import { InspirationsComponent } from './inspirations.component';
import { InspirationsRoutingModule } from './inspirations-routing.module';

export const modules = [
  TopBarHeaderModule,
  InspirationsHeaderModule,
  InspirationsCategoriesModule,
  InspirationsMasonryModule,
  PaginationModule,
  FooterModule,
];

@NgModule({
  declarations: [InspirationsComponent],
  imports: [CommonModule, InspirationsRoutingModule, ...modules],
})
export class InspirationsModule {}
