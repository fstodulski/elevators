import { Component, OnDestroy, OnInit } from '@angular/core';
import { CompanyCategoriesQuery } from '@core/repository/company-categories/state/company-categories.query';
import { CompanyCategoriesService } from '@core/repository/company-categories/state/company-categories.service';
import { CompanyCategory } from '@core/repository/company-categories/state/company-category.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar-filters',
  template: `
    <section class="w-full bg-white shadow:sm py-4 px-8 flex items-center">
      <form>
        <input type="text" placeholder="Szukaj" />
      </form>

      <div class="flex items-center ml-auto">
        <span class="tag" *ngFor="let category of companyCategories | async">
          <img [src]="category.icon.url" alt="" class="mr-2" />
          {{ category.name }}
        </span>

        <button class="ml-6">
          <div class="dropdown-menu">Hello world</div>
        </button>
      </div>
    </section>
  `,
  styleUrls: ['./top-bar-filters.component.scss'],
})
export class TopBarFiltersComponent implements OnInit, OnDestroy {
  private readonly subs$: Subscription;

  public companyCategories: Observable<
    Array<CompanyCategory>
  > = this.companyCategoriesQuery.selectAll();

  constructor(
    public readonly companyCategoriesService: CompanyCategoriesService,
    public readonly companyCategoriesQuery: CompanyCategoriesQuery
  ) {
    this.subs$ = new Subscription();
  }

  public ngOnInit(): void {
    this.subs$.add(this.companyCategoriesService.get().subscribe());
  }

  public ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }
}
