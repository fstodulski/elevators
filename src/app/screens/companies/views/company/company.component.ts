import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CompanyDto } from '@core/models';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

import { CompanyDatasourceService } from './company-datasource.service';

@UntilDestroy({
  checkProperties: true,
})
@Component({
  selector: 'app-company',
  template: `
    <section
      class="flex flex-col w-full md:pl-8 md:pr-4"
      *ngIf="company$ | async as company"
    >
      <app-header [company]="company"></app-header>

      <!-- <app-companies-map></app-companies-map> -->
      <app-about [company]="company"></app-about>
      <app-contact-details [company]="company"></app-contact-details>
      <app-images [images]="company.images"></app-images>
      <a
        [href]="'tel:' + company.phoneNumber"
        class="flex rounded-md mt-8 w-full items-center justify-center py-3 bg-main-800 transition duration-300 hover:bg-main-900 text-h300 text-white"
      >
        <fa-icon class="mr-2" [icon]="phoneIcon"></fa-icon
        >{{ company.phoneNumber }}
      </a>
    </section>
  `,
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent implements OnInit, OnDestroy {
  public readonly company$: Observable<CompanyDto | undefined> =
    this._companyDatasourceService.company$;

  public readonly phoneIcon: typeof faPhone = faPhone;

  constructor(
    private readonly _companyDatasourceService: CompanyDatasourceService
  ) {}

  public ngOnInit(): void {
    this._fetchCompany();
  }

  private _fetchCompany(): void {
    this._companyDatasourceService
      .fetchCompany()
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  public ngOnDestroy(): void {
    this._companyDatasourceService.destroy();
  }
}
