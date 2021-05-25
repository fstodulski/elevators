import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { CompaniesFacade } from '../../state/companies.facade';

@Component({
  selector: 'app-companies-list',
  template: `
    <ul
      class="flex flex-col py-4 px-8"
      *ngIf="companiesFacade.companiesNotEmpty$ | async"
    >
      <li
        class="card"
        *ngFor="let company of companiesFacade.companies$ | async"
      >
        <figure class="company-logo-wrapper">
          <img class="company-logo" [src]="company.logo.url" alt="" />
        </figure>
        <article class="w-full ml-4">
          <div class="flex justify-between mb-1">
            <h3 class="company-name">{{ company.name }}</h3>
            <span class="company-short-description">{{
              company.shortDescription
            }}</span>
            <a class="phone" [href]="'tel:' + company.phoneNumber">
              <nb-icon icon="phone-outline"></nb-icon>
              {{ company.phoneNumber }}
            </a>
          </div>

          <div class="flex justify-between w-full">
            <span class="company-street-name items-baseline">
              <nb-icon icon="pin-outline"></nb-icon>
              {{ company.city }},
              {{ company.streetName }}
            </span>

            <div class="flex items-center ml-auto">
              <span class="tag"> Produkcja </span>
            </div>
          </div>
        </article>
      </li>
    </ul>
  `,
  styleUrls: ['./companies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesListComponent implements OnInit, OnDestroy {
  public subs$: Subscription;

  constructor(
    public readonly companiesFacade: CompaniesFacade,
    private readonly geolocation$: GeolocationService
  ) {
    this.subs$ = new Subscription();
  }

  public ngOnInit(): void {
    this.companiesFacade.all();
    this.getCoords();
  }

  public ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  private getCoords(): void {
    this.subs$.add(
      this.geolocation$.pipe(take(1)).subscribe(
        ({ coords }) =>
          (this.companiesFacade.location = {
            lat: coords.latitude,
            lng: coords.longitude,
          })
      )
    );
  }
}
