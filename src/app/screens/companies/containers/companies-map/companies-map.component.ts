import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '@env';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, skip } from 'rxjs/operators';

import { CompaniesFacade } from '../../state/companies.facade';

@Component({
  selector: 'app-companies-map',
  template: `
    <div *ngIf="apiLoaded | async" class="companies-map">
      <google-map
        *ngIf="hasCoords$ | async"
        width="100%"
        height="100%"
        [options]="mapOptions"
      ></google-map>
    </div>
  `,
  styleUrls: ['./companies-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesMapComponent implements OnInit {
  public apiLoaded: Observable<boolean>;

  public mapOptions: google.maps.MapOptions;

  public readonly hasCoords$: BehaviorSubject<boolean>;

  constructor(
    public readonly httpClient: HttpClient,
    private readonly companiesFacade: CompaniesFacade
  ) {
    this.hasCoords$ = new BehaviorSubject<boolean>(false);

    this.mapOptions = {
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
    };

    this.apiLoaded = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsAPI}`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  public ngOnInit(): void {
    this.companiesFacade.location$.pipe(skip(1)).subscribe(({ lat, lng }) => {
      this.mapOptions = {
        ...this.mapOptions,
        center: {
          lat,
          lng,
        },
      };

      this.hasCoords$.next(true);
    });
  }
}
