import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inspirations',
  },
  {
    path: ':lang/elevators',
    loadChildren: async () =>
      (await import('./screens/elevators/elevators.module')).ElevatorsModule,
  },
  {
    path: ':lang/windy',
    loadChildren: async () =>
      (await import('./screens/elevators/elevators.module')).ElevatorsModule,
  },
  //
  {
    path: ':lang/companies',
    loadChildren: async () =>
      (await import('./screens/companies/companies.module')).CompaniesModule,
  },
  {
    path: ':lang/firmy',
    loadChildren: async () =>
      (await import('./screens/companies/companies.module')).CompaniesModule,
  },
  //
  {
    path: ':lang/inspirations',
    loadChildren: async () =>
      (await import('./screens/inspirations/inspirations.module'))
        .InspirationsModule,
  },
  {
    path: ':lang/inspiracje',
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
