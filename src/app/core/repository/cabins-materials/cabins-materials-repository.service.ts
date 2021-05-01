import { Injectable } from '@angular/core';
import { CabinsMaterialsDto } from '@core/models';
import {
  CabinsMaterialsQuery,
  cabinsMaterialsQuery,
} from '@core/repository/cabins-materials/cabins-materials.graphql';
import { TranslocoService } from '@ngneat/transloco';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CabinsMaterialsRepositoryService {
  constructor(
    private readonly apollo: Apollo,
    private readonly translocoService: TranslocoService
  ) {}

  public cabinsMaterials(): Observable<CabinsMaterialsDto> {
    return this.apollo
      .query<CabinsMaterialsQuery>({
        query: cabinsMaterialsQuery,
        variables: {
          lang: this.translocoService.getActiveLang(),
        },
      })
      .pipe(map(({ data }) => data.cabinsMaterials[0]));
  }
}
