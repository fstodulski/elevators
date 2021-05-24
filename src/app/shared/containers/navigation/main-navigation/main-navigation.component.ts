import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-main-navigation',
  template: `
    <nav class="flex items-center h-full navigation">
      <a
        [routerLink]="[link.path]"
        routerLinkActive="active"
        class="link"
        *ngFor="let link of links"
        >{{ link.label }}</a
      >
    </nav>
  `,
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {
  public readonly links: Array<Route & { label: string }>;

  constructor(private readonly translocoService: TranslocoService) {
    this.links = this.routes(this.translocoService.getDefaultLang());
  }

  public routes(lang: string): Array<Route & { label: string }> {
    switch (lang) {
      case 'en': {
        return [
          {
            path: `${lang}/elevators`,
            label: 'Elevators',
          },
          {
            path: `${lang}/companies/all`,
            label: 'Companies',
          },
          {
            path: `${lang}/inspirations`,
            label: 'Inspirations',
          },
        ];
      }
      case 'pl': {
        return [
          {
            path: `${lang}/windy`,
            label: 'Windy',
          },
          {
            path: `${lang}/katalog-firm/wszystkie`,
            label: 'Katalog firm',
          },
          {
            path: `${lang}/inspiracje`,
            label: 'Inspiracje',
          },
        ];
      }
      default: {
        return [
          {
            path: `${lang}/windy`,
            label: 'Windy',
          },
          {
            path: `${lang}/katalog firm/wszystkie`,
            label: 'Katalog-firm',
          },
          {
            path: `${lang}/inspiracje`,
            label: 'Inspiracje',
          },
        ];
      }
    }
  }
}
