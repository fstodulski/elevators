import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import {
  CompanyCategoriesState,
  CompanyCategoriesStore,
} from './company-categories.store';
import { CompanyCategory } from './company-category.model';

@Injectable({ providedIn: 'root' })
export class CompanyCategoriesQuery extends QueryEntity<
  CompanyCategoriesState,
  CompanyCategory
> {
  constructor(protected store: CompanyCategoriesStore) {
    super(store);
  }
}
