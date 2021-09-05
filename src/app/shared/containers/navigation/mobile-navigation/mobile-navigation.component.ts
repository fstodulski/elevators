import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompanyDto } from '@core/models';
import { CompanyQuery, CompanyService } from '@core/repository';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { TranslocoService } from '@ngneat/transloco';
import { Navigation } from '@shared/containers/navigation/navigation';
import { Observable } from 'rxjs';

import { MobileNavigationService } from './mobile-navigation.service';

@Component({
  selector: 'app-mobile-navigation',
  template: `
    <button
      class="bg-main-800 text-white w-10 h-10 flex items-center justify-center rounded-md"
      (click)="mobileNavigationService.toggleMobileMenu()"
    >
      <fa-icon [icon]="barIcon"></fa-icon>
    </button>

    <aside
      class="md:hidden fixed z-50 flex flex-col items-baseline top-0 -right-full bg-white w-screen h-screen overflow-hidden transition-all duration-300"
      [ngClass]="{ isOpen: (isOpen$ | async) === true }"
    >
      <div
        class="flex items-center justify-between w-full border-b border-gray-100 py-4"
      >
        <span class="text-h300 text-gray-900 ml-6">Menu</span>

        <button
          class="bg-white border border-main-800 text-main-800 w-10 h-10 flex items-center justify-center rounded-md mr-4"
          (click)="mobileNavigationService.toggleMobileMenu()"
        >
          <fa-icon [icon]="barIcon"></fa-icon>
        </button>
      </div>

      <div class="flex flex-col h-100 overflow-auto w-full">
        <nav class="flex flex-col w-full pt-12 px-6 pb-6">
          <a
            class="px-8 py-5 text-h300 bg-main-800 font-bold rounded-md bg-gradient-to-t from-main-900 to-main-800 text-white mb-8 last:mb-0"
            [routerLink]="[link.path]"
            routerLinkActive="active"
            *ngFor="let link of links"
            (click)="mobileNavigationService.toggleMobileMenu()"
            >{{ link.label }}</a
          >
        </nav>

        <section class="flex flex-col pt-6 px-6">
          <span class="text-body:md text-gray-600 mb-6 last:mb-0"
            >Polecane firmy</span
          >

          <app-company-preview-card
            *ngFor="let company of recommended$ | async"
            class="mb-6"
            [company]="company"
            [richView]="false"
          ></app-company-preview-card>
        </section>

        <div class="flex flex-col w-full mt-12 px-6">
          <span class="text-body:md text-gray-600 mb-6">
            Zobacz polecane firmy z twojego rejonu 👇
          </span>

          <button
            class="w-full py-3 flex justify-center items-center border border-gray-900 text-gray-900 bg-white rounded-md font-bold mb-2"
          >
            Włącz lokalizację
          </button>
        </div>
      </div>
    </aside>
  `,
  styleUrls: ['./mobile-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNavigationComponent extends Navigation implements OnInit {
  public readonly recommended$: Observable<Array<CompanyDto>> = this
    ._companyQuery.recommended$;
  public readonly barIcon: typeof faBars = faBars;
  public readonly isOpen$: Observable<boolean> = this.mobileNavigationService
    .isOpen$;

  constructor(
    private readonly _translocoService: TranslocoService,
    private readonly _companyService: CompanyService,
    private readonly _companyQuery: CompanyQuery,
    public readonly mobileNavigationService: MobileNavigationService
  ) {
    super(_translocoService);
  }

  public ngOnInit(): void {
    this._companyService.getAll({ last: 3, region: '' }).subscribe();
  }
}
