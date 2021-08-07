import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '../container/container.module';
import { ContactDetailsComponent } from './contact-details.component';

export const modules = [ContainerModule];

@NgModule({
  declarations: [ContactDetailsComponent],
  imports: [CommonModule, ...modules],
  exports: [ContactDetailsComponent],
})
export class ContactDetailsModule {}
