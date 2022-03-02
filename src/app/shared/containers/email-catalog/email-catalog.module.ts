import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { SubscribeService } from '@core/services/mailchimp/subscribe.service';

import { EmailCatalogComponent } from './email-catalog.component';

export const modules = [];


@NgModule({
  imports: [CommonModule, ...modules, ReactiveFormsModule],
  declarations: [EmailCatalogComponent],
  exports: [EmailCatalogComponent],
})
export class EmailCatalogModule { }
