import { Component, OnInit } from '@angular/core';

import { CabinsRealisationService } from './cabins-realisation.service';

@Component({
  selector: 'app-cabins-realisation',
  template: `
    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-8 py-12 max-w-screen-xl mx-auto"
      *ngIf="
        cabinsRealisationService.cabinsRealisation$ | async as cabinsRealisation
      "
    >
      <app-hero-header position="ltr">
        <ng-container title> {{ cabinsRealisation.title }} </ng-container>
        <ng-container subtitle> {{ cabinsRealisation.subTitle }}</ng-container>
        <ng-container content>
          <nav class="flex flex-wrap mt-10">
            <span
              chip
              size="sm"
              *ngFor="let category of cabinsRealisation.inspirationCategories"
            >
              {{ category.title }}
            </span>
          </nav>
        </ng-container>
      </app-hero-header>

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
