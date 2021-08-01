import { Injectable } from '@angular/core';
import { RegionDto } from '@core/models';
import { regions, RegionsDto } from '@core/repository/region/region.graphql';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegionRepository {
  constructor(private readonly apollo: Apollo) {}

  public regions(): Observable<Array<RegionDto>> {
    return this.apollo
      .query<RegionsDto>({
        query: regions,
      })
      .pipe(map((res) => res.data.regions));
  }
}
