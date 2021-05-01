import { Injectable } from '@angular/core';
import { InspirationCategoryDto } from '@core/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InspirationCategoryRepositoryService {
  constructor() {}

  public inspirationCategories(): Observable<Array<InspirationCategoryDto>> {
    return of([
      {
        id: '1',
        title: 'Wszystkie inspiracje',
        slug: 'wszystkie inspiracje',
      },
    ]);
  }
}
