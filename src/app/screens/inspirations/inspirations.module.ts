import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspirationsRoutingModule } from './inspirations-routing.module';
import { InspirationsComponent } from './inspirations.component';


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
