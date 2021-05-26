import { Injectable } from '@angular/core';
import { CompanyDto } from '@core/models';
import { TranslocoService } from '@ngneat/transloco';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { companies, CompaniesQuery } from './companies.graphql';

@Injectable({
  providedIn: 'root',
})
export class CompaniesRepositoryService {
  constructor(
    private readonly apollo: Apollo,
    private readonly translocoService: TranslocoService
  ) {}

  public companies(): Observable<Array<CompanyDto>> {
    return this.apollo
      .query<CompaniesQuery>({
        query: companies,
        variables: {
          lang: this.translocoService.getActiveLang(),
        },
      })
      .pipe(map(({ data }) => data.companies));
  }
}
