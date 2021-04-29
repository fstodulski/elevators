import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inspirations',
  },
  {
    path: 'elevators',
    loadChildren: async () =>
      (await import('./screens/elevators/elevators.module')).ElevatorsModule,
  },
  {
    path: 'windy',
    loadChildren: async () =>
      (await import('./screens/elevators/elevators.module')).ElevatorsModule,
  },
  //
  {
    path: 'companies',
    loadChildren: async () =>
      (await import('./screens/companies/companies.module')).CompaniesModule,
  },
  {
    path: 'firmy',
    loadChildren: async () =>
      (await import('./screens/companies/companies.module')).CompaniesModule,
  },
  //
  {
    path: 'inspirations',
    loadChildren: async () =>
      (await import('./screens/inspirations/inspirations.module'))
        .InspirationsModule,
  },
  {
    path: 'inspiracje',
    loadChildren: async () =>
      (await import('./screens/inspirations/inspirations.module'))
        .InspirationsModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
