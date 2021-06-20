import { Component, OnInit } from '@angular/core';

import { CabinsHeroService } from './cabins-hero.service';

@Component({
  selector: 'app-cabins-hero',
  template: `
    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-8 py-6 max-w-screen-xl mx-auto container"
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

      <app-hero-header [rtl]="true">
        <ng-container title>
          {{ cabinsHero.title }}
        </ng-container>

        <ng-container subtitle>
          {{ cabinsHero.subTitle }}
        </ng-container>

        <ng-container content>
          <a
            [href]="cabinsHero.buttonTargetLink"
            nbButton
            size="large"
            class="mt-8 mr-auto w-full md:w-auto"
            status="primary"
          >
            {{ cabinsHero.buttonLabel }}
            <nb-icon icon="chevron-right-outline"></nb-icon>
          </a>
        </ng-container>
      </app-hero-header>
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
