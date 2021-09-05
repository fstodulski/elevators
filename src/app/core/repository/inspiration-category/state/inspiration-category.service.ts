import { Injectable } from '@angular/core';
import { InspirationCategoryDto } from '@core/models';
import { InspirationCategoryRepositoryService } from '@core/repository';
import { Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';

import { InspirationCategoryStore } from './inspiration-category.store';

@Injectable({ providedIn: 'root' })
export class InspirationCategoryService {
  constructor(
    private inspirationCategoryStore: InspirationCategoryStore,
    private readonly inspirationCategoryRepository: InspirationCategoryRepositoryService
  ) {}

  public inspirationCategories(): Observable<Array<InspirationCategoryDto>> {
    return this.inspirationCategoryRepository.inspirationCategories().pipe(
      tap((res) => this.inspirationCategoryStore.set(res)),
      share()
    );
  }
}
