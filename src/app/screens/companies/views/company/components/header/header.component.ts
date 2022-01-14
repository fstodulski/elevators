import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CompanyDto } from '@core/models';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { TranslocoService } from '@ngneat/transloco';

import { CompaniesMapService } from '../../../../containers/companies-map/companies-map.service';

@Component({
  selector: 'app-header',
  template: `
    <div
      class="flex flex-col bg-main-800 p-4 w-full rounded-bl-md rounded-br-md"
    >
      <ng-container *ngIf="company">
        <div class="flex justify-between py-2 pr-2">
          <button [routerLink]="backUrl">
            <fa-icon class="text-white" [icon]="arrowBackIcon"></fa-icon>
          </button>

          <div class="flex items-center">
            <a
              [routerLink]="company.facebook"
              target="_blank"
              class="text-primary-300"
            >
              <fa-icon [icon]="facebookIcon"></fa-icon>
            </a>
            <a
              [routerLink]="company.instagram"
              target="_blank"
              class="text-primary-300 ml-6"
            >
              <fa-icon [icon]="instagramIcon"></fa-icon>
            </a>
          </div>
        </div>

        <article class="mt-2 grid grid-cols-1 sm:grid-cols-12 gap-4">
          <figure
            class="image col-start-1 2xl:col-end-3 col-end-13 sm:col-end-4 bg-white rounded-xl flex items-center justify-center"
          >
            <img class="" loading="lazy" [src]="company.logo?.url" alt="" />
          </figure>

          <div
            class="flex flex-col 2xl:col-start-3 col-start-1 sm:col-start-4 col-end-13"
          >
            <h3 class="text-h500 font-bold text-main-0 uppercase mb-1">
              {{ company.name }}
            </h3>
            <span class="text-body-lg text-main-0">
              {{ company.shortDescription }}</span
            >
            <a
              [href]="company.websiteUrl"
              target="_blank"
              class="text-h200 mt-6 text-main-0"
              >{{ company.websiteUrl }}</a
            >
            <div class="flex flex-col sm:flex-row mt-2">
              <a
                [href]="'tel:' + company.phoneNumber"
                class="text-h200 text-main-100 font-bold mr-6 mb-2 sm:mb-0"
              >
                {{ company.phoneNumber }}
              </a>
              <a
                [href]="'mailto:' + company.email"
                class="text-h200 text-main-100 font-bold"
                >{{ company.email }}</a
              >
            </div>
          </div>
        </article>
      </ng-container>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() public company: CompanyDto | undefined = undefined;

  public readonly arrowBackIcon: typeof faArrowLeft = faArrowLeft;
  public readonly facebookIcon: typeof faFacebookF = faFacebookF;
  public readonly instagramIcon: typeof faInstagram = faInstagram;
  constructor(
    private readonly translocoService: TranslocoService,
    private readonly _companiesMapService: CompaniesMapService
  ) {}

  public get backUrl(): string {
    switch (this.translocoService.getActiveLang()) {
      case 'pl': {
        return `/pl/katalog-firm`;
      }
      case 'en': {
        return '/en/companies';
      }
      default: {
        return '/pl/katalog-firm';
      }
    }
  }

  public ngOnInit(): void {
    this._companiesMapService.updateMapOptions({
      center: {
        lat: this.company?.geoLat as number,
        lng: this.company?.geoLang as number,
      },
      zoom: 15,
    });
  }

  public ngOnDestroy(): void {
    this._companiesMapService.setInitialMapOptions();
  }
}
