import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ElevatorsComponent } from './elevators.component';
import { ElevatorsRoutingModule } from './elevators-routing.module';


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
