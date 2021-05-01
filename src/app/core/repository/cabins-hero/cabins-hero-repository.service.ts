import { Injectable } from '@angular/core';
import { CabinsHeroDto } from '@core/models';
import {
  CabinsHeroQuery,
  cabinsHeroQuery,
} from '@core/repository/cabins-hero/cabins-hero.graphql';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CabinsHeroRepositoryService {
  constructor(private readonly apollo: Apollo) {}

  public cabinsHero(): Observable<CabinsHeroDto> {
    return this.apollo
      .query<CabinsHeroQuery>({
        query: cabinsHeroQuery,
      })
      .pipe(
        map(({ data }) => data.cabinsHeroes[0]),
        share()
      );
  }
}
