import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableOneModule } from '@shared/containers';

import { CabinsHeroModule } from './containers/cabins-hero/cabins-hero.module';
import { CabinsMaterialsModule } from './containers/cabins-materials/cabins-materials.module';
import { CabinsRealisationModule } from './containers/cabins-realisation/cabins-realisation.module';
import { ElevatorsComponent } from './elevators.component';
import { ElevatorsRoutingModule } from './elevators-routing.module';

const modules = [
  CabinsHeroModule,
  CabinsRealisationModule,
  CabinsMaterialsModule,
  TableOneModule,
];

@NgModule({
  declarations: [ElevatorsComponent],
  imports: [CommonModule, ElevatorsRoutingModule, ...modules],
})
export class ElevatorsModule {}
