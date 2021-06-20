import { Component, OnInit } from '@angular/core';

import { CabinsDetailsService } from './cabins-details.service';

@Component({
  selector: 'app-cabins-details',
  template: `
    <section
      class="flex flex-col lg:px-8 py-6 max-w-screen-xl mx-auto container"
      *ngIf="cabinsDetailsService.cabinDetails$ | async as cabinDetails"
    >
      <app-hero-header>
        <ng-container title>{{ cabinDetails.title }}</ng-container>
      </app-hero-header>

      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full mt-10"
      >
        <li
          class="flex flex-col"
          *ngFor="let element of cabinDetails.cabinsDetailElements"
        >
          <figure class="image-wrapper">
            <img class="image" [src]="element.image.url" alt="" />
          </figure>

          <span class="title">{{ element.title }}</span>
        </li>
      </ul>
    </section>
  `,
  styleUrls: ['./cabins-details.component.scss'],
})
export class CabinsDetailsComponent implements OnInit {
  constructor(public readonly cabinsDetailsService: CabinsDetailsService) {}

  public ngOnInit(): void {
    this.cabinsDetailsService.cabinDetails();
  }
}
