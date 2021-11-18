import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from '@core/guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pl/windy',
  },
  {
    path: ':lang/elevators',
    loadChildren: async () =>
      (await import('./screens/elevators/elevators.module')).ElevatorsModule,
    resolve: [LanguageGuard],
  },
  {
    path: ':lang/windy',
    loadChildren: async () =>
      (await import('./screens/elevators/elevators.module')).ElevatorsModule,
    resolve: [LanguageGuard],
  },

  {
    path: ':lang/companies',
    loadChildren: async () =>
      (await import('./screens/companies/companies.module')).CompaniesModule,
    resolve: [LanguageGuard],
  },
  {
    path: ':lang/katalog-firm',
    loadChildren: async () =>
      (await import('./screens/companies/companies.module')).CompaniesModule,
    resolve: [LanguageGuard],
  },

  {
    path: ':lang/inspirations',
    loadChildren: async () =>
      (await import('./screens/inspirations/inspirations.module'))
        .InspirationsModule,
    resolve: [LanguageGuard],
  },
  {
    path: ':lang/inspiracje',
    loadChildren: async () =>
      (await import('./screens/inspirations/inspirations.module'))
        .InspirationsModule,
    resolve: [LanguageGuard],
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
