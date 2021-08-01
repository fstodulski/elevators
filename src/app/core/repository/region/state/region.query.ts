import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { RegionState,RegionStore } from './region.store';

@Injectable({ providedIn: 'root' })
export class RegionQuery extends QueryEntity<RegionState> {

  constructor(protected store: RegionStore) {
    super(store);
  }

}
