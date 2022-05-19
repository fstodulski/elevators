import { Component, OnInit } from '@angular/core';
import { InspirationCategoryDto } from '@core/models';
import {
  InspirationCategoryQuery,
  InspirationCategoryService,
} from '@core/repository';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inspirations',
  template: `
    <main>
      <app-inspirations-header></app-inspirations-header>
      <!-- <app-inspirations-categories
        *ngIf="categories$ | async as categories"
        [categories]="categories"
      ></app-inspirations-categories> -->
      <app-inspirations-masonry
        *ngIf="categories$ | async"
      ></app-inspirations-masonry>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./inspirations.component.scss'],
})
export class InspirationsComponent implements OnInit {
  public categories$: Observable<Array<InspirationCategoryDto>> =
    this.inspirationCategoriesQuery.selectAll();

  constructor(
    public readonly inspirationCategoryService: InspirationCategoryService,
    private readonly inspirationCategoriesQuery: InspirationCategoryQuery
  ) {}

  public ngOnInit(): void {
    this.inspirationCategoryService.inspirationCategories().subscribe();
  }
}
