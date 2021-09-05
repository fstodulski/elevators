import { Injectable } from '@angular/core';
import { CompanyDto } from '@core/models';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CompanyState, CompanyStore } from './company.store';

@Injectable({ providedIn: 'root' })
export class CompanyQuery extends QueryEntity<CompanyState> {
  public readonly recommended$: Observable<
    Array<CompanyDto>
  > = this.selectAll().pipe(map((res: Array<CompanyDto>) => res.slice(0, 3)));

  constructor(protected store: CompanyStore) {
    super(store);
  }
}
