import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionDto } from '@core/models';
import { CompanyService } from '@core/repository/company';
import { CompanyCategoriesQuery } from '@core/repository/company-categories/state/company-categories.query';
import { CompanyCategoriesService } from '@core/repository/company-categories/state/company-categories.service';
import { CompanyCategory } from '@core/repository/company-categories/state/company-category.model';
import { RegionQuery } from '@core/repository/region/state/region.query';
import { RegionService } from '@core/repository/region/state/region.service';
import { CategoryIcons } from '@shared/category-icons.map';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { TopBarFiltersQuery } from './state/top-bar-filters.query';

interface FormGroupDto {
  name: string;
  region: string;
}

@Component({
  selector: 'app-top-bar-filters',
  template: `
    <section
      class="w-full bg-white py-4 px-8 flex items-center overflow-auto shadow-md"
    >
      <form [formGroup]="formGroup" class="flex items-center">
        <input
          class="bg-gray-100 input"
          type="text"
          placeholder="Szukaj"
          formControlName="name"
        />
        <select
          class="ml-3 input"
          name="region"
          id="region"
          formControlName="region"
        >
          <option value="">Wszystkie województwa</option>
          <option *ngFor="let region of regions$ | async" [value]="region.id">
            {{ region.name }}
          </option>
        </select>
      </form>

      <div class="lg:flex items-center ml-auto">
        <div
          class="tag cursor-pointer"
          [ngClass]="{
            'active-category': getActiveGategory(category)
          }"
          *ngFor="let category of companyCategories | async"
        >
          <a
            [routerLink]="[]"
            [queryParams]="{ slug: category.slug }"
            class="inline-flex"
          >
            <svg-icon
              class="mr-2"
              [src]="categoryIconsMap[category.icon]"
              [svgStyle]="{ 'width.px': 20 }"
            ></svg-icon>
            {{ category.name }}
          </a>
          <span
            [ngClass]="{
              hidden: getCustomCss(category)
            }"
            [routerLink]="[]"
            [queryParams]="{ slug: '' }"
            class="material-icons p-1 text-lg cursor-pointer"
            >close</span
          >
        </div>

        <button class="ml-6">
          <div class="dropdown-menu">Hello world</div>
        </button>
      </div>
    </section>
  `,
  styleUrls: ['./top-bar-filters.component.scss'],
})
export class TopBarFiltersComponent implements OnInit, OnDestroy {
  public readonly categoryIconsMap: any = CategoryIcons;
  public readonly companyCategories: Observable<Array<CompanyCategory>> =
    this.companyCategoriesQuery.selectAll();

  public readonly regions$: Observable<Array<RegionDto>> =
    this.regionQuery.selectAll();

  public readonly formGroup: FormGroup;

  private readonly subs$: Subscription;

  constructor(
    public readonly companyCategoriesService: CompanyCategoriesService,
    public readonly companyCategoriesQuery: CompanyCategoriesQuery,
    private readonly companyService: CompanyService,
    private readonly regionService: RegionService,
    private readonly regionQuery: RegionQuery,
    private readonly topBarFiltersQuery: TopBarFiltersQuery,
    private readonly fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
    this.subs$ = new Subscription();
    this.formGroup = this.fb.group({
      name: ['', [Validators.minLength(3)]],
      region: [''],
    });
  }

  public ngOnInit(): void {
    this.subs$.add(this.companyCategoriesService.get().subscribe());
    this.subs$.add(this.regionService.getAll().subscribe());
    this.watchForm();
  }

  public ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  private watchForm(): void {
    this.subs$.add(
      this.formGroup.valueChanges
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap(({ region, name }: FormGroupDto) => {
            return this.companyService.getAll({
              region,
              name,
            });
          })
        )
        .subscribe()
    );
  }

  public selectCategory(slug: string): void {
    this._router.navigate([], {
      queryParams: {
        slug,
      },
    });

    // this.router.navigate(
    //   [],
    //   {
    //     relativeTo: activatedRoute,
    //     queryParams: queryParams,
    //     queryParamsHandling: 'merge', // remove to replace all query params by provided
    //   });
  }
  public getCustomCss(companyCategory: CompanyCategory): boolean {
    const slug = this._router.url.split('=')[1];
    const category: string = companyCategory.name.toLowerCase();

    if (slug !== category) {
      if (slug == 'montaz' && category == 'montaż') return false;
      return true;
    }
    return false;
  }
  public getActiveGategory(companyCategory: CompanyCategory): boolean {
    const slug = this._router.url.split('=')[1];
    const category: string = companyCategory.name.toLowerCase();

    //Do wyjasnienia
    if (!slug || !category) return false;
    if (slug == 'montaz' && category == 'montaż') return true;
    if (slug === category) return true;
    return false;
  }

  private get regionField(): FormControl {
    return this.formGroup.get('region') as FormControl;
  }
}
