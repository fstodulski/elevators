import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { InspirationCategory } from './inspiration-category.model';

export interface InspirationCategoryState extends EntityState<InspirationCategory> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'inspiration-category' })
export class InspirationCategoryStore extends EntityStore<InspirationCategoryState> {

  constructor() {
    super();
  }

}
