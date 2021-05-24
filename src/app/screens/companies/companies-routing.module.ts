import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
    children: [
      // ALL Companies
      {
        path: 'all',
        loadChildren: async () =>
          (await import('./views/companies-list/companies-list.module'))
            .CompaniesListModule,
      },
      {
        path: 'wszystkie',
        loadChildren: async () =>
          (await import('./views/companies-list/companies-list.module'))
            .CompaniesListModule,
      },
      {
        path: ':id',
        loadChildren: async () =>
          (await import('./views/company/company.module')).CompanyModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
