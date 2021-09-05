import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompanyDto } from '@core/models';
import { CompanyQuery, CompanyService } from '@core/repository';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies-list',
  template: `
    <app-sort-by></app-sort-by>
    <ul class="flex flex-col py-4 px-4 lg:px-8">
      <app-company-preview-card
        class="mb-6"
        [class.opacity-50]="isLoading$ | async"
        [company]="company"
        *ngFor="let company of companies$ | async"
      ></app-company-preview-card>
    </ul>
  `,
  styleUrls: ['./companies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesListComponent implements OnInit {
  public readonly companies$: Observable<
    Array<CompanyDto>
  > = this.companyQuery.selectAll();

  public readonly isLoading$: Observable<boolean> = this.companyQuery.selectLoading();

  constructor(
    private readonly companyQuery: CompanyQuery,
    private readonly companyService: CompanyService
  ) {}

  public ngOnInit(): void {
    this.companyService
      .getAll({
        region: '',
        name: '',
      })
      .subscribe();
  }
}
