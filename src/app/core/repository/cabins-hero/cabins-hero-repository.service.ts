import { Injectable } from '@angular/core';
import { CabinsHeroDto } from '@core/models';
import {
  CabinsHeroQuery,
  cabinsHeroQuery,
} from '@core/repository/cabins-hero/cabins-hero.graphql';
import { TranslocoService } from '@ngneat/transloco';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CabinsHeroRepositoryService {
  constructor(
    private readonly apollo: Apollo,
    private readonly translocoService: TranslocoService
  ) {}

  public cabinsHero(): Observable<CabinsHeroDto> {
    return this.apollo
      .query<CabinsHeroQuery>({
        query: cabinsHeroQuery,
        variables: {
          lang: this.translocoService.getActiveLang(),
        },
      })
      .pipe(
        map(({ data }) => data.cabinsHeroes[0]),
        share()
      );
  }
}
