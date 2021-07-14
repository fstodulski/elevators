import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyPreviewCardModule, HeroHeaderModule } from '../../components';
import { CatalogueCtaComponent } from './catalogue-cta.component';

export const modules = [HeroHeaderModule, CompanyPreviewCardModule];

@NgModule({
  declarations: [CatalogueCtaComponent],
  imports: [CommonModule, ...modules],
  exports: [CatalogueCtaComponent],
})
export class CatalogueCtaModule {}
