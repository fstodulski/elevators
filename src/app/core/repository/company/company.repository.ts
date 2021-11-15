import { Injectable } from '@angular/core';
import { CompaniesQueryDto, CompanyDto } from '@core/models';
import { TranslocoService } from '@ngneat/transloco';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  companies,
  companiesInRange,
  CompaniesInRangeQuery,
  CompaniesQuery,
  company,
  CompanyQuery,
} from './company.graphql';

@Injectable({
  providedIn: 'root',
})
export class CompanyRepository {
  constructor(
    private readonly apollo: Apollo,
    private readonly translocoService: TranslocoService
  ) {}

  public company(id: string): Observable<CompanyDto> {
    return this.apollo
      .query<CompanyQuery>({
        query: company,
        variables: {
          lang: this.translocoService.getActiveLang(),
          id,
        },
      })
      .pipe(map(({ data }) => data.company));
  }

  public companies(
    variables?: CompaniesQueryDto
  ): Observable<Array<CompanyDto>> {
    return this.apollo
      .query<CompaniesQuery>({
        query: companies,
        variables: {
          lang: this.translocoService.getActiveLang(),
          ...variables,
        },
      })
      .pipe(map(({ data }) => data.companies));
  }

  public companiesInRange(): Observable<Array<Partial<CompanyDto>>> {
    return this.apollo
      .query<CompaniesInRangeQuery>({
        query: companiesInRange,
      })
      .pipe(map(({ data }) => data.companies));
  }
}
