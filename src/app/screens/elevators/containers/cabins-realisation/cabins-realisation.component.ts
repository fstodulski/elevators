import { Component, OnInit } from '@angular/core';

import { CabinsRealisationService } from './cabins-realisation.service';

@Component({
  selector: 'app-cabins-realisation',
  template: `
    <section
      class="grid grid-cols-2 gap-6 px-8 py-6"
      *ngIf="
        cabinsRealisationService.cabinsRealisation$ | async as cabinsRealisation
      "
    >
      <article class="flex items-center justify-center">
        <div class="flex flex-col max-w-lg">
          <h2 class="text-h500 text-gray-900">
            {{ cabinsRealisation.title }}
          </h2>
          <div class="separator"></div>
          <p class="text-body:lg text-gray-600">
            {{ cabinsRealisation.subTitle }}
          </p>

          <nav class="flex flex-wrap mt-10">
            <a
              chip
              *ngFor="let category of cabinsRealisation.inspirationCategories"
              >{{ category.title }}</a
            >
          </nav>
        </div>
      </article>

      <figure class="flex items-center">
        <img
          class="w-full"
          [src]="cabinsRealisation.image[0].url"
          loading="lazy"
          alt=""
        />
      </figure>
    </section>
  `,
  styleUrls: ['./cabins-realisation.component.scss'],
})
export class CabinsRealisationComponent implements OnInit {
  constructor(
    public readonly cabinsRealisationService: CabinsRealisationService
  ) {}

  public ngOnInit(): void {
    this.cabinsRealisationService.cabinsRealisation();
  }
}
