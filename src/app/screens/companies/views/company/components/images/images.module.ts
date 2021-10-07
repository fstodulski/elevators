import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '../container/container.module';
import { ImagesComponent } from './images.component';

@NgModule({
  declarations: [ImagesComponent],
  imports: [CommonModule, ContainerModule],
  exports: [ImagesComponent],
})
export class ImagesModule {}
