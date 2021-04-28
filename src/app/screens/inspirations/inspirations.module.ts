import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InspirationsComponent } from './inspirations.component';
import { InspirationsRoutingModule } from './inspirations-routing.module';


@NgModule({
  declarations: [
    InspirationsComponent
  ],
  imports: [
    CommonModule,
    InspirationsRoutingModule
  ]
})
export class InspirationsModule { }
