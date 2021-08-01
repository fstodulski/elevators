import { Injectable } from '@angular/core';
import { RegionDto } from '@core/models';

import { TopBarFiltersStore } from './top-bar-filters.store';

@Injectable({ providedIn: 'root' })
export class TopBarFiltersService {
  constructor(private readonly topBarFiltersStore: TopBarFiltersStore) {}

  public set region(region: RegionDto) {
    this.topBarFiltersStore.update({
      region,
    });
  }
}
