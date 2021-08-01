import { Injectable } from '@angular/core';
import { CompanyCategoryDto } from '@core/models/company-category';
import { TranslocoService } from '@ngneat/transloco';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  companyCategories,
  CompanyCategoriesQuery,
} from './company-category.graphql';

@Injectable({
  providedIn: 'root',
})
export class CompanyCategoriesRepositoryService {
  constructor(
    private readonly apollo: Apollo,
    private readonly translocoService: TranslocoService
  ) {}

  public companyCategories(
    region?: string
  ): Observable<Array<CompanyCategoryDto>> {
    return this.apollo
      .query<CompanyCategoriesQuery>({
        query: companyCategories,
        variables: {
          lang: this.lang,
          region,
        },
      })
      .pipe(map(({ data }) => data.companyCategories));
  }

  private get lang(): string {
    return this.translocoService.getActiveLang();
  }
}
