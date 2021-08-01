import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegionDto } from '@core/models';
import { CompanyService } from '@core/repository/company';
import { CompanyCategoriesQuery } from '@core/repository/company-categories/state/company-categories.query';
import { CompanyCategoriesService } from '@core/repository/company-categories/state/company-categories.service';
import { CompanyCategory } from '@core/repository/company-categories/state/company-category.model';
import { RegionQuery } from '@core/repository/region/state/region.query';
import { RegionService } from '@core/repository/region/state/region.service';
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
    <section class="w-full bg-white shadow:sm py-4 px-8 flex items-center">
      <form [formGroup]="formGroup">
        <input type="text" placeholder="Szukaj" formControlName="name" />
        <select class="ml-3" name="region" id="region" formControlName="region">
          <option value="">Wszystkie województwa</option>
          <option *ngFor="let region of regions$ | async" [value]="region.id">
            {{ region.name }}
          </option>
        </select>
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
  public readonly companyCategories: Observable<
    Array<CompanyCategory>
  > = this.companyCategoriesQuery.selectAll();

  public readonly regions$: Observable<
    Array<RegionDto>
  > = this.regionQuery.selectAll();

  public readonly formGroup: FormGroup;

  private readonly subs$: Subscription;

  constructor(
    public readonly companyCategoriesService: CompanyCategoriesService,
    public readonly companyCategoriesQuery: CompanyCategoriesQuery,
    private readonly companyService: CompanyService,
    private readonly regionService: RegionService,
    private readonly regionQuery: RegionQuery,
    private readonly topBarFiltersQuery: TopBarFiltersQuery,
    private readonly fb: FormBuilder
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

  private get regionField(): FormControl {
    return this.formGroup.get('region') as FormControl;
  }
}
