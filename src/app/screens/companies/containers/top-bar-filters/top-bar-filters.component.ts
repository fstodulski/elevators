import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar-filters',
  template: `
    <section class="w-full bg-white shadow:sm">Top Filters</section>
  `,
  styleUrls: ['./top-bar-filters.component.scss'],
})
export class TopBarFiltersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
