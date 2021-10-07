import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkerType } from '@core/models/marker/marker.type';
import { CompanyQuery } from '@core/repository';
import { LocationService } from '@core/services';
import { environment } from '@env';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, share, skip } from 'rxjs/operators';

const INITAL_MAP_COORDS: google.maps.LatLngLiteral = {
  lat: 51.9194,
  lng: 19.1451,
};

@Component({
  selector: 'app-companies-map',
  template: `
    <div *ngIf="apiLoaded | async" class="companies-map">
      <google-map
        *ngIf="hasCoords$ | async"
        width="100%"
        height="100%"
        [options]="mapOptions"
      >
        <map-marker
          *ngFor="let marker of mapMarkers$ | async"
          [position]="marker.position"
          [options]="marker.options"
          (mapClick)="clickOnMarker(marker)"
        ></map-marker>
      </google-map>
    </div>
  `,
  styleUrls: ['./companies-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesMapComponent implements OnInit {
  public apiLoaded: Observable<boolean>;

  public mapOptions: google.maps.MapOptions;

  public readonly mapMarkers$: Observable<Array<MarkerType>> =
    this._companyQuery.mapMarkers$.pipe(share());

  public readonly hasCoords$: BehaviorSubject<boolean>;

  constructor(
    public readonly httpClient: HttpClient,
    private readonly locationService: LocationService,
    private readonly _companyQuery: CompanyQuery,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
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
    this.locationService.coords$.pipe(skip(1)).subscribe(() => {
      this.mapOptions = {
        ...this.mapOptions,
        center: INITAL_MAP_COORDS,
        zoom: 6.5,
      };

      this.hasCoords$.next(true);
    });
  }

  public clickOnMarker(marker: MarkerType): void {
    this._router.navigate([marker.options.title], {
      relativeTo: this._route,
    });
  }
}
