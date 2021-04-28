import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElevatorsComponent } from './elevators.component';

const routes: Routes = [
  {
    path: '',
    component: ElevatorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElevatorsRoutingModule {}
