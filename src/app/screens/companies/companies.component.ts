import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { CompaniesFacade } from './state/companies.facade';

@Component({
  selector: 'app-companies',
  template: `
    <app-top-bar-filters></app-top-bar-filters>
    <section class="grid grid-cols-12">
      <div class="flex col-start-1 col-end-8">
        <router-outlet></router-outlet>
      </div>
      <app-companies-map class="col-start-8 col-end-13"></app-companies-map>
    </section>
  `,
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  public subs$: Subscription;

  constructor(
    private readonly geolocation$: GeolocationService,
    public readonly companiesFacade: CompaniesFacade
  ) {
    this.subs$ = new Subscription();
  }

  public ngOnInit(): void {
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
