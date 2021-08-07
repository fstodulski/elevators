import { Injectable } from '@angular/core';
import { CompaniesQueryDto, CompanyDto } from '@core/models';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CompanyRepository } from '../company.repository';
import { CompanyStore } from './company.store';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(
    private companyStore: CompanyStore,
    private readonly companyRepository: CompanyRepository,
    private readonly routerQuery: RouterQuery
  ) {}

  public getAll(params?: CompaniesQueryDto): Observable<Array<CompanyDto>> {
    this.companyStore.setLoading(true);

    return this.companyRepository.companies(params).pipe(
      tap((entities) => {
        this.companyStore.set(entities);

        this.companyStore.setLoading(false);
      })
    );
  }

  public company(): Observable<CompanyDto> {
    this.companyStore.setLoading(true);
    const id = this.routerQuery.getParams('id');
    return this.companyRepository.company(id).pipe(
      tap((res) => {
        this.companyStore.set([res]);
        this.companyStore.setLoading(false);
      })
    );
  }
}
