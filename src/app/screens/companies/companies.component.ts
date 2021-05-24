import { Component } from '@angular/core';

@Component({
  selector: 'app-companies',
  template: `
    <app-top-bar-filters></app-top-bar-filters>
    <section class="grid grid-cols-12">
      <div class="flex col-start-1 col-end-8">
        <router-outlet></router-outlet>
      </div>
      <app-companies-map class="col-start-8 col-end-13"></app-companies-map>
    </section>
  `,
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {
  constructor() {}
}
