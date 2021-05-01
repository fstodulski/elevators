import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CabinsHeroModule } from './containers/cabins-hero/cabins-hero.module';
import { CabinsRealisationModule } from './containers/cabins-realisation/cabins-realisation.module';
import { ElevatorsComponent } from './elevators.component';
import { ElevatorsRoutingModule } from './elevators-routing.module';

const modules = [CabinsHeroModule, CabinsRealisationModule];

@NgModule({
  declarations: [ElevatorsComponent],
  imports: [CommonModule, ElevatorsRoutingModule, ...modules],
})
export class ElevatorsModule {}
