import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { CompanyCategory } from './company-category.model';

export interface CompanyCategoriesState extends EntityState<CompanyCategory> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'company-categories' })
export class CompanyCategoriesStore extends EntityStore<
  CompanyCategoriesState,
  CompanyCategory
> {
  constructor() {
    super();
  }
}
