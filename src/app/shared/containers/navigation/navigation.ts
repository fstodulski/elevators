import { Directive } from '@angular/core';
import { Route } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Directive()
export abstract class Navigation {
  public readonly links: Array<Route & { label: string }>;

  protected constructor(private readonly translocoService: TranslocoService) {
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
            path: `${lang}/companies`,
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
            path: `${lang}/katalog-firm`,
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
            path: `${lang}/katalog firm`,
            label: 'Katalog-firm',
          },
          // {
          //   path: `${lang}/inspiracje`,
          //   label: 'Inspiracje',
          // },
        ];
      }
    }
  }
}
