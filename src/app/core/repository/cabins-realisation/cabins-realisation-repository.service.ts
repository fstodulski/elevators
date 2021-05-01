import { Injectable } from '@angular/core';
import { CabinsRealisationDto } from '@core/models';
import {
  CabinsRealisationQuery,
  cabinsRealisationsQuery,
} from '@core/repository/cabins-realisation/cabins-realisation.graphql';
import { TranslocoService } from '@ngneat/transloco';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CabinsRealisationRepositoryService {
  constructor(
    private readonly apollo: Apollo,
    private readonly translocoService: TranslocoService
  ) {}

  public cabinRealisation(): Observable<CabinsRealisationDto> {
    return this.apollo
      .query<CabinsRealisationQuery>({
        query: cabinsRealisationsQuery,
        variables: {
          lang: this.translocoService.getActiveLang(),
        },
      })
      .pipe(
        map(({ data }) => data.cabinsRealisations[0]),
        share()
      );
  }
}
