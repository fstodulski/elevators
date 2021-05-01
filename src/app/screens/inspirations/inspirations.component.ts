import { Component, OnInit } from '@angular/core';
import { InspirationCategoryDto } from '@core/models';
import { InspirationCategoryService } from '@core/repository';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-inspirations',
  template: `
    <main>
      <app-inspirations-header></app-inspirations-header>
      <app-inspirations-categories
        *ngIf="categories$ | async as categories"
        [categories]="categories"
      ></app-inspirations-categories>
      <app-inspirations-masonry></app-inspirations-masonry>
      <app-pagination></app-pagination>
    </main>
  `,
  styleUrls: ['./inspirations.component.scss'],
})
export class InspirationsComponent implements OnInit {
  public categories$: Observable<Array<InspirationCategoryDto>>;

  constructor(
    public readonly inspirationCategoryService: InspirationCategoryService
  ) {
    this.categories$ = of([]);
  }

  public ngOnInit(): void {
    this.categories$ = this.inspirationCategoryService.inspirationCategories();
  }
}
