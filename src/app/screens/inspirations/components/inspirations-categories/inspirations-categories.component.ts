import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class InspirationsCategoriesComponent implements OnInit {
  @Input() public readonly categories: Array<InspirationCategoryDto>;
  @Output() public readonly selected: EventEmitter<any>;

  constructor() {
    this.categories = [
      {
        id: '',
        title: 'Wszystkie Inspiracje',
        slug: 'wszystkie-inspiracje',
      },
      {
        id: '',
        title: 'Gastronomia',
        slug: 'gastronomia',
      },
    ];
    this.selected = new EventEmitter();
  }

  ngOnInit(): void {}
}
