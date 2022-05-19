import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  template: `
    <app-top-bar-filters></app-top-bar-filters>
    <section class="flex">
      <div class="flex flex-1 2xl:flex-50 md:flex-60">
        <router-outlet></router-outlet>
      </div>
      <div class="hidden lg:block 2xl:flex-50 flex-40">
        <app-companies-map></app-companies-map>
      </div>
    </section>
  `,
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  public ngOnInit(): void {
    this._document.body.classList.add('full-height');
  }

  public ngOnDestroy(): void {
    this._document.body.classList.remove('full-height');
  }
}
