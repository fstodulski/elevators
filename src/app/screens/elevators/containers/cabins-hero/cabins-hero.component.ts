import { Component, OnInit } from '@angular/core';

import { CabinsHeroService } from './cabins-hero.service';

@Component({
  selector: 'app-cabins-hero',
  template: `
    <section
      class="grid grid-cols-2 gap-6 px-8 py-6 max-w-screen-xl mx-auto"
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
          <h2 class="cabins-hero-title">
            {{ cabinsHero.title }}
          </h2>

          <div class="separator"></div>

          <p class="cabins-hero-subtitle ">
            {{ cabinsHero.subTitle }}
          </p>
          <a
            [href]="cabinsHero.buttonTargetLink"
            nbButton
            size="large"
            class="mt-8 mr-auto"
            status="primary"
          >
            {{ cabinsHero.buttonLabel }}
            <nb-icon icon="chevron-right-outline"></nb-icon>
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
