import { Injectable } from '@angular/core';
import { RegionDto } from '@core/models';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import {
  TopBarFiltersState,
  TopBarFiltersStore,
} from './top-bar-filters.store';

@Injectable({ providedIn: 'root' })
export class TopBarFiltersQuery extends Query<TopBarFiltersState> {
  public readonly region$: Observable<RegionDto> = this.select(
    ({ region }) => region
    // @ts-ignore
  ).pipe(filter((res): RegionDto => <RegionDto>res));

  constructor(protected store: TopBarFiltersStore) {
    super(store);
  }
}
