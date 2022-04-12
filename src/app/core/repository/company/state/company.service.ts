import { Injectable } from '@angular/core';
import { CompaniesQueryDto, CompanyDto } from '@core/models';
import { CompanyRepository } from '@core/repository';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CompanyStore } from './company.store';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(
    private companyStore: CompanyStore,
    private readonly companyRepository: CompanyRepository,
    private readonly routerQuery: RouterQuery
  ) { }

  public select(id: string): void {
    this.companyStore.update(null, { isMarkerSelected: false });

    this.companyStore.update(id as any, { isMarkerSelected: true });
  }

  public getAll(params?: CompaniesQueryDto): Observable<Array<CompanyDto>> {
    this.companyStore.setLoading(true);
    if (params?.slug === undefined && params) params.slug = ""


    return this.companyRepository.companies(params).pipe(
      tap((entities) => {
        // console.log(entities)
        this.companyStore.set(entities);

        this.companyStore.setLoading(false);
      })
    );
  }

  public company(): Observable<CompanyDto> {
    this.companyStore.setLoading(true);
    const id = this.routerQuery.getParams('id');
    return this.companyRepository.company(id).pipe(
      tap(() => {
        this.companyStore.setLoading(false);
      })
    );
  }
}
