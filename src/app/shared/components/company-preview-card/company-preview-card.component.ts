import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompanyDto } from '@core/models';

@Component({
  selector: 'app-company-preview-card',
  template: `
    <div
      class="flex w-full bg-white rounded-sm shadow:sm py-2 px-3 items-center overflow-hidden"
      *ngIf="company"
    >
      <figure class="company-logo-wrapper">
        <img class="company-logo" [src]="company.logo?.url" alt="" />
      </figure>

      <article class="w-full ml-4">
        <div class="flex flex-col md:flex-row mb-2">
          <h3 class="company-name">{{ company?.name }}</h3>

          <a
            class="phone ml-0 md:ml-auto"
            [href]="'tel:' + company?.phoneNumber"
          >
            {{ company?.phoneNumber }}
          </a>
        </div>

        <div class="flex justify-between w-full items-center" *ngIf="richView">
          <span class="company-street-name items-baseline truncate">
            {{ company?.city }},
            {{ company?.streetName }}
          </span>

          <div class="flex items-center ml-auto">
            <span
              class="tag"
              *ngFor="let category of company?.companyCategories"
            >
              {{ category.name }}
            </span>
          </div>
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

  constructor() {}
}
