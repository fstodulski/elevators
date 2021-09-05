import { Injectable } from '@angular/core';
import { InspirationCategoryDto } from '@core/models';
import {
  inspirationCategories,
  InspirationCategoriesQuery,
} from '@core/repository/inspiration-category/inspiration-category-repository.graphql';
import { TranslocoService } from '@ngneat/transloco';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InspirationCategoryRepositoryService {
  constructor(
    private readonly apollo: Apollo,
    private readonly translocoService: TranslocoService
  ) {}

  public inspirationCategories(): Observable<Array<InspirationCategoryDto>> {
    return this.apollo
      .query<InspirationCategoriesQuery>({
        query: inspirationCategories,
        variables: {
          lang: this.translocoService.getActiveLang(),
        },
      })
      .pipe(map(({ data }) => data.inspirationCategories));
  }
}
