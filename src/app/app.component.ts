import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>
      <nb-layout-column>
        <app-top-bar-header></app-top-bar-header>
        <router-outlet></router-outlet>

        <
      </nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
