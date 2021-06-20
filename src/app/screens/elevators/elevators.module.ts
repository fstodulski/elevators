import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from '@shared/components';
import { EmailCatalogModule, TableOneModule } from '@shared/containers';

import { CabinsDetailsModule } from './containers/cabins-details/cabins-details.module';
import { CabinsHeroModule } from './containers/cabins-hero/cabins-hero.module';
import { CabinsMaterialsModule } from './containers/cabins-materials/cabins-materials.module';
import { CabinsRealisationModule } from './containers/cabins-realisation/cabins-realisation.module';
import { ElevatorsComponent } from './elevators.component';
import { ElevatorsRoutingModule } from './elevators-routing.module';

const modules = [
  CabinsHeroModule,
  CabinsRealisationModule,
  CabinsMaterialsModule,
  CabinsDetailsModule,
  TableOneModule,
  EmailCatalogModule,
  FooterModule,
];

@NgModule({
  declarations: [ElevatorsComponent],
  imports: [CommonModule, ElevatorsRoutingModule, ...modules],
})
export class ElevatorsModule {}
