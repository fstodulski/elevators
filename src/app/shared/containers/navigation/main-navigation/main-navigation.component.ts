import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  template: `
    <nav class="flex items-center h-full navigation">
      <a
        [routerLink]="[link.path]"
        routerLinkActive="active"
        class="link text-body:lg"
        *ngFor="let link of links"
        >{{ link.label }}</a
      >
    </nav>
  `,
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent implements OnInit {
  public readonly links: Array<Route & { label: string }>;

  constructor() {
    this.links = [
      {
        path: '/elevators',
        label: 'Windy',
      },
      {
        path: '/companies',
        label: 'Katalog firm',
      },
      {
        path: '/inspirations',
        label: 'Inspiracje',
      },
    ];
  }

  public ngOnInit(): void {}
}
