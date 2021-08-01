import { Injectable } from '@angular/core';
import { RegionDto } from '@core/models';
import { Store, StoreConfig } from '@datorama/akita';

export interface TopBarFiltersState {
  region: RegionDto | undefined;
}

export function createInitialState(): TopBarFiltersState {
  return {
    region: undefined,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'top-bar-filters', resettable: true })
export class TopBarFiltersStore extends Store<TopBarFiltersState> {
  constructor() {
    super(createInitialState());
  }
}
