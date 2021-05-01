import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-bar-header></app-top-bar-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
