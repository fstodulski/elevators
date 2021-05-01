import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InspirationCategoryDto } from '@core/models';

@Component({
  selector: 'app-inspirations-categories',
  template: `
    <section class="flex flex-wrap px-8 pt-6 pb-12">
      <a
        [routerLink]="['/inspirations']"
        [queryParams]="{ category: category.slug }"
        routerLinkActive="selected"
        class="category"
        *ngFor="let category of categories"
        >{{ category.title }}</a
      >
    </section>
  `,
  styleUrls: ['./inspirations-categories.component.scss'],
})
export class InspirationsCategoriesComponent {
  @Input() public categories: Array<InspirationCategoryDto>;
  @Output() public selected: EventEmitter<any>;

  constructor() {
    this.categories = [];
    this.selected = new EventEmitter();
  }
}
