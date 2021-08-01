import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompanyDto } from '@core/models';
import { CompanyQuery, CompanyService } from '@core/repository';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies-list',
  template: `
    <ul class="flex flex-col py-4 px-8">
      <app-company-preview-card
        class="mb-6"
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
