import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { ContainerModule } from '../container/container.module';
import { AboutComponent } from './about.component';

export const modules = [ContainerModule];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, ...modules, MarkdownModule.forChild()],
  exports: [AboutComponent],
})
export class AboutModule {}
