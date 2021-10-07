import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';

import { Company } from './company.model';

export interface CompanyState
  extends EntityState<Company, number>,
    ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'company' })
export class CompanyStore extends EntityStore<CompanyState> {
  constructor() {
    super();
  }
}
