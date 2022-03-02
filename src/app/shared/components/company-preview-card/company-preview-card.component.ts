import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompanyDto } from '@core/models';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-company-preview-card',
  template: `
    <div
      class="flex w-full bg-white rounded-sm shadow:sm py-2 px-3 items-center hover:bg-gray-50 cursor-pointer"
      [routerLink]="[companyUrl]"
      *ngIf="company"
    >
      <figure class="company-logo-wrapper">
        <img class="company-logo" [src]="company.logo?.url" alt="" />
      </figure>

      <article class="w-full ml-4">
        <div class="flex flex-col md:flex-row  lg:mb-2">
          <h3
            class="company-name cursor-pointer mb-2 lg:mb-0"
            
          >
            {{ company?.name }}
          </h3>
          <!-- [href]="'tel:' + company?.phoneNumber" REUSE FOR PHONE NUMBER-->
          <a
            class="phone text-h300 font-bold ml-0 md:ml-auto"
          >
            {{ company?.phoneNumber }}
          </a>
        </div>

        <div
          class="hidden sm:flex justify-between w-full items-center"
          *ngIf="richView"
        >
          <span class="company-street-name items-baseline truncate">
            <fa-icon [icon]="placeIcon"></fa-icon>
            {{ company?.city }},
            {{ company?.streetName }}
          </span>

          <!-- <div class="flex items-center ml-auto">
            <span
              class="tag"
              *ngFor="let category of company?.companyCategories | slice:0:3"
            >
              {{ category.name }}
            </span>
          </div> -->
        </div>
      </article>
    </div>
  `,
  styleUrls: ['./company-preview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyPreviewCardComponent {
  @Input() public company?: Partial<CompanyDto>;
  @Input() public richView: boolean = true;

  public readonly placeIcon: typeof faMapMarkerAlt = faMapMarkerAlt;

  constructor(private readonly translocoService: TranslocoService) { }

  public get companyUrl(): string {
    switch (this.translocoService.getActiveLang()) {
      case 'pl': {
        return `/pl/katalog-firm/${this.company?.id}`;
      }
      case 'en': {
        return `/en/companies/${this.company?.id}`;
      }
      default: {
        return `/pl/katalog-firm/${this.company?.id}`;
      }
    }
  }
}
