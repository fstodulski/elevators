import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CompanyService } from '@core/repository';
import { LocationService } from '@core/services';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-companies',
  template: `
    <app-top-bar-filters></app-top-bar-filters>
    <section class="flex flex-1">
      <div class="flex list">
        <router-outlet></router-outlet>
      </div>
      <app-companies-map class="hidden lg:block map"></app-companies-map>
    </section>
  `,
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit, OnDestroy {
  public subs$: Subscription;

  constructor(
    private readonly _geolocation$: GeolocationService,
    private readonly _locationService: LocationService,
    private readonly _companyService: CompanyService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.subs$ = new Subscription();
  }

  public ngOnInit(): void {
    this._getCoords();
    this._fetchAllCompanies();
    this.document.body.classList.add('full-height');
  }

  public ngOnDestroy(): void {
    this.subs$.unsubscribe();
    this.document.body.classList.remove('full-height');
  }

  private _fetchAllCompanies(): void {
    this._companyService
      .getAll({
        region: '',
        name: '',
      })
      .subscribe();
  }

  private _getCoords(): void {
    this.subs$.add(
      this._geolocation$.pipe(take(1)).subscribe(
        ({ coords }) =>
          (this._locationService.coords = {
            lat: coords.latitude,
            lng: coords.longitude,
          })
      )
    );
  }
}
