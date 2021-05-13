import { Component, OnInit } from '@angular/core';

import { CabinsRealisationService } from './cabins-realisation.service';

@Component({
  selector: 'app-cabins-realisation',
  template: `
    <section
      class="grid grid-cols-2 gap-6 px-8 py-6 max-w-screen-xl mx-auto"
      *ngIf="
        cabinsRealisationService.cabinsRealisation$ | async as cabinsRealisation
      "
    >
      <article class="flex items-center justify-center">
        <div class="flex flex-col max-w-lg">
          <h2 class="cabins-hero-title">
            {{ cabinsRealisation.title }}
          </h2>
          <div class="separator"></div>
          <p class="cabins-hero-subtitle">
            {{ cabinsRealisation.subTitle }}
          </p>

          <nav class="flex flex-wrap mt-10">
            <nb-tag-list>
              <nb-tag
                class="tag"
                status="primary"
                appearance="outline"
                [text]="category.title"
                *ngFor="let category of cabinsRealisation.inspirationCategories"
              ></nb-tag>
            </nb-tag-list>
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
