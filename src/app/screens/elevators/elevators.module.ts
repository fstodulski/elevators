import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElevatorsRoutingModule } from './elevators-routing.module';
import { ElevatorsComponent } from './elevators.component';


@NgModule({
  declarations: [
    ElevatorsComponent
  ],
  imports: [
    CommonModule,
    ElevatorsRoutingModule
  ]
})
export class ElevatorsModule { }
