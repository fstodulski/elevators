import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InspirationsComponent } from './inspirations.component';

const routes: Routes = [
  {
    path: '',
    component: InspirationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspirationsRoutingModule {}
