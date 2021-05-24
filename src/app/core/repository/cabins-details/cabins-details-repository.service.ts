import { Injectable } from '@angular/core';
import { CabinsDetailsDto } from '@core/models';
import { TranslocoService } from '@ngneat/transloco';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { cabinsDetails, CabinsDetailsQuery } from './cabins-details.graphql';

@Injectable({
  providedIn: 'root',
})
export class CabinsDetailsRepositoryService {
  constructor(
    private readonly apollo: Apollo,
    private readonly translocoService: TranslocoService
  ) {}

  public cabinsDetails(): Observable<CabinsDetailsDto> {
    return this.apollo
      .query<CabinsDetailsQuery>({
        query: cabinsDetails,
        variables: {
          lang: this.translocoService.getActiveLang(),
        },
      })
      .pipe(map(({ data }) => data.cabinsDetails[0]));
  }
}
