import { Injectable } from '@angular/core';
import { CompanyDto } from '@core/models';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';

import { CompaniesState, CompaniesStore } from './companies.store';

@Injectable({ providedIn: 'root' })
export class CompaniesQuery extends Query<CompaniesState> {
  public readonly companies$: Observable<Array<CompanyDto>> = this.select(
    ({ companies }) => companies
  );

  public readonly companiesNotEmpty$: Observable<boolean> = this.select(
    ({ companies }) => companies.length > 0
  );

  public readonly isLoading$: Observable<boolean> = this.selectLoading();

  constructor(protected store: CompaniesStore) {
    super(store);
  }

  public get companies(): Array<CompanyDto> {
    return this.getValue().companies;
  }
}
