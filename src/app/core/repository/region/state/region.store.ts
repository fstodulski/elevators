import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Region } from './region.model';

export interface RegionState extends EntityState<Region> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'region' })
export class RegionStore extends EntityStore<RegionState> {

  constructor() {
    super();
  }

}
