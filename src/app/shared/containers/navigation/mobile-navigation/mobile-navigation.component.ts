import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MobileNavigationService } from './mobile-navigation.service';

@Component({
  selector: 'app-mobile-navigation',
  template: `
    <button
      nbButton
      size="small"
      status="primary"
      (click)="mobileNavigationService.toggleMobileMenu()"
    >
      <nb-icon icon="menu-outline"></nb-icon>
    </button>

    <aside
      class="md:hidden fixed z-50 flex top-0 -right-full bg-main-900 w-screen h-screen transition-all duration-300"
      [ngClass]="{ isOpen: (isOpen$ | async) === true }"
    >
      <span
        class="text-white"
        (click)="mobileNavigationService.toggleMobileMenu()"
      >
        hello world
      </span>
    </aside>
  `,
  styleUrls: ['./mobile-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNavigationComponent {
  public readonly isOpen$: Observable<boolean> = this.mobileNavigationService
    .isOpen$;

  constructor(
    public readonly mobileNavigationService: MobileNavigationService
  ) {}
}
