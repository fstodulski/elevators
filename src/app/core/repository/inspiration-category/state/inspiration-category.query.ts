import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { InspirationCategoryState,InspirationCategoryStore } from './inspiration-category.store';

@Injectable({ providedIn: 'root' })
export class InspirationCategoryQuery extends QueryEntity<InspirationCategoryState> {

  constructor(protected store: InspirationCategoryStore) {
    super(store);
  }

}
