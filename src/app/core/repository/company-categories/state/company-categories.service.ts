import { Injectable } from '@angular/core';
import { CompanyCategoryDto } from '@core/models/company-category';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CompanyCategoriesRepositoryService } from '../company-categories-repository.service';
import { CompanyCategoriesQuery } from './company-categories.query';
import { CompanyCategoriesStore } from './company-categories.store';
import { CompanyCategory } from './company-category.model';

@Injectable({ providedIn: 'root' })
export class CompanyCategoriesService {
  constructor(
    private readonly companyCategoriesQuery: CompanyCategoriesQuery,
    private companyCategoriesStore: CompanyCategoriesStore,
    private readonly companyCategoriesRepository: CompanyCategoriesRepositoryService
  ) {}

  public get(): Observable<Array<CompanyCategoryDto>> {
    return this.companyCategoriesRepository.companyCategories().pipe(
      tap((entities) => {
        this.companyCategoriesStore.set(entities);
      })
    );
  }

  public add(companyCategory: CompanyCategory): void {
    this.companyCategoriesStore.add(companyCategory);
  }

  public update(id: ID, companyCategory: Partial<CompanyCategory>): void {
    this.companyCategoriesStore.update(id, companyCategory);
  }

  public remove(id: ID): void {
    this.companyCategoriesStore.remove(id);
  }
}
