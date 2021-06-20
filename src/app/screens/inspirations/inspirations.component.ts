import { Component, OnInit } from '@angular/core';
import { InspirationCategoryDto } from '@core/models';
import { InspirationCategoryRepositoryService } from '@core/repository';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-inspirations',
  template: `
    <main class="container">
      <app-inspirations-header></app-inspirations-header>
      <app-inspirations-categories
        *ngIf="categories$ | async as categories"
        [categories]="categories"
      ></app-inspirations-categories>
      <app-inspirations-masonry></app-inspirations-masonry>
      <app-pagination></app-pagination>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./inspirations.component.scss'],
})
export class InspirationsComponent implements OnInit {
  public categories$: Observable<Array<InspirationCategoryDto>>;

  constructor(
    public readonly inspirationCategoryService: InspirationCategoryRepositoryService
  ) {
    this.categories$ = of([]);
  }

  public ngOnInit(): void {
    this.categories$ = this.inspirationCategoryService.inspirationCategories();
  }
}
