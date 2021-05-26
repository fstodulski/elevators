import { Injectable } from '@angular/core';
import { CompanyDto, LocationDto } from '@core/models';
import { CompaniesRepositoryService } from '@core/repository/companies/companies-repository.service';
import { Observable } from 'rxjs';

import { CompaniesQuery } from './companies.query';
import { CompaniesStore } from './companies.store';

@Injectable({ providedIn: 'root' })
export class CompaniesFacade {
  constructor(
    private readonly companiesStore: CompaniesStore,
    private readonly companiesQuery: CompaniesQuery,
    private readonly companiesRepositoryService: CompaniesRepositoryService
  ) {}

  public get companiesNotEmpty$(): Observable<boolean> {
    return this.companiesQuery.companiesNotEmpty$;
  }

  public get companies$(): Observable<Array<CompanyDto>> {
    return this.companiesQuery.companies$;
  }

  public set location(value: LocationDto) {
    this.companiesStore.update({
      location: value,
    });
  }

  public get location$(): Observable<LocationDto> {
    return this.companiesQuery.location$;
  }

  public async all(): Promise<void> {
    try {
      this.companiesStore.setLoading(true);

      const companies = await this.companiesRepositoryService
        .companies()
        .toPromise();

      this.companiesStore.update({
        companies,
      });
    } finally {
      this.companiesStore.setLoading(false);
    }
  }
}
