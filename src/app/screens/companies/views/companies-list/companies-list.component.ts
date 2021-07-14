import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CompaniesFacade } from '../../state/companies.facade';

@Component({
  selector: 'app-companies-list',
  template: `
    <ul
      class="flex flex-col py-4 px-8"
      *ngIf="companiesFacade.companiesNotEmpty$ | async"
    >
      <app-company-preview-card
        [company]="company"
        *ngFor="let company of companiesFacade.companies$ | async"
      ></app-company-preview-card>
    </ul>
  `,
  styleUrls: ['./companies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesListComponent implements OnInit {
  constructor(public readonly companiesFacade: CompaniesFacade) {}

  public ngOnInit(): void {
    this.companiesFacade.all();
  }
}
