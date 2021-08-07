import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompanyDto } from '@core/models';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex flex-col bg-main-800 p-4 w-full rounded-md">
      <div class="flex justify-between">
        <button [routerLink]="backUrl">Back</button>

        <div class="flex items-center">
          <a [routerLink]="company.facebook" target="_blank">FB</a>
          <a [routerLink]="company.instagram" target="_blank">IG</a>
        </div>
      </div>

      <article class="mt-2 flex">
        <figure class="mr-4">
          <img [src]="company.logo.url" alt="" />
        </figure>

        <div class="flex flex-col">
          <h3 class="text-h500 font-bold text-main-0 uppercase mb-1">
            {{ company.name }}
          </h3>
          <span class="text-body:lg text-main-0">
            {{ company.shortDescription }}</span
          >
          <a
            [href]="company.websiteUrl"
            target="_blank"
            class="text-h200 mt-auto text-main-0 font-bold"
            >{{ company.websiteUrl }}</a
          >
          <div class="flex mt-2">
            <a
              [href]="'tel:' + company.phoneNumber"
              class="text-h200 text-main-100 font-bold mr-6"
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
    </div>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() public company!: CompanyDto;

  constructor(private readonly translocoService: TranslocoService) {}

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
}
