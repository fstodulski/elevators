import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompanyDto } from '@core/models';
import { CompanyQuery, CompanyService } from '@core/repository';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

@UntilDestroy({
  checkProperties: true,
})
@Component({
  selector: 'app-company',
  template: `
    <section
      class="flex flex-col w-full pl-8 pr-4"
      *ngIf="company$ | async as company"
    >
      <app-header [company]="company"></app-header>
      <app-about [company]="company"></app-about>
      <app-contact-details [company]="company"></app-contact-details>
    </section>
  `,
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent implements OnInit {
  public readonly company$: Observable<
    CompanyDto | undefined
  > = this.companyQuery.selectFirst();

  constructor(
    private readonly companyService: CompanyService,
    private readonly companyQuery: CompanyQuery
  ) {}

  public ngOnInit(): void {
    this.companyService.company().subscribe();
  }
}
