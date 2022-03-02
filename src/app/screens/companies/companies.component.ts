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
      <app-companies-map
        class="hidden lg:block 2xl:flex-50 flex-40 p-5"
      ></app-companies-map>
    </section>
  `,
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private readonly document: Document) { }

  public ngOnInit(): void {
    this.document.body.classList.add('full-height');
  }

  public ngOnDestroy(): void {
    this.document.body.classList.remove('full-height');
  }
}
