import { Injectable } from '@angular/core';
import { CompaniesQueryDto, CompanyDto } from '@core/models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CompanyRepository } from '../company.repository';
import { CompanyStore } from './company.store';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(
    private companyStore: CompanyStore,
    private readonly companyRepository: CompanyRepository
  ) {}

  public getAll(params?: CompaniesQueryDto): Observable<Array<CompanyDto>> {
    return this.companyRepository.companies(params).pipe(
      tap((entities) => {
        this.companyStore.set(entities);
      })
    );
  }
}
