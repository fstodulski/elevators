import { Component, OnInit } from '@angular/core';

import { CabinsHeroService } from './cabins-hero.service';

@Component({
  selector: 'app-cabins-hero',
  template: `
    <section
      class="grid grid-cols-2 gap-6 px-8 py-6"
      *ngIf="cabinsHeroService.cabinsHero$ | async as cabinsHero"
    >
      <figure class="flex items-center">
        <img
          class="w-full"
          [src]="cabinsHero.image.url"
          loading="lazy"
          alt=""
        />
      </figure>

      <article class="flex items-center justify-center">
        <div class="flex flex-col max-w-lg">
          <h2 class="text-h500 text-gray-900">
            {{ cabinsHero.title }}
          </h2>

          <div class="separator"></div>

          <p class="text-body:lg text-gray-600 ">
            {{ cabinsHero.subTitle }}
          </p>
          <a
            [href]="cabinsHero.buttonTargetLink"
            t-button
            size="lg"
            class="mt-8 mr-auto"
            icon="arrow_circle_right"
          >
            {{ cabinsHero.buttonLabel }}
          </a>
        </div>
      </article>
    </section>
  `,
  styleUrls: ['./cabins-hero.component.scss'],
})
export class CabinsHeroComponent implements OnInit {
  constructor(public readonly cabinsHeroService: CabinsHeroService) {}

  public ngOnInit(): void {
    this.cabinsHeroService.cabinsHero();
  }
}
