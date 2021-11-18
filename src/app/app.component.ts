import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-bar-header></app-top-bar-header>
    <ng-container *transloco="let t">
      {{ t('hello_world') }}
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
