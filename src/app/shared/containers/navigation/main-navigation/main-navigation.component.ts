import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Navigation } from '@shared/containers/navigation/navigation';

@Component({
  selector: 'app-main-navigation',
  template: `
    <nav class="items-center h-full navigation hidden md:flex">
      <a
        class="link"
        [routerLink]="[link.path]"
        routerLinkActive="active"
        *ngFor="let link of links"
        >{{ link.label }}</a
      >
    </nav>
  `,
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent extends Navigation {
  constructor(private readonly _translocoService: TranslocoService) {
    super(_translocoService);
  }
}
