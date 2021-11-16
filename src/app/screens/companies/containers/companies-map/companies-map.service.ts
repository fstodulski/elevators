import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyQuery } from '@core/repository';
import { BehaviorSubject, Observable } from 'rxjs';

const INITAL_MAP_COORDS: google.maps.LatLngLiteral = {
  lat: 51.9194,
  lng: 19.1451,
};

@Injectable({
  providedIn: 'root',
})
export class CompaniesMapService {
  private readonly _mapOptions$: BehaviorSubject<google.maps.MapOptions>;
  public readonly hasCoords$: BehaviorSubject<boolean>;

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _companyQuery: CompanyQuery
  ) {
    this.hasCoords$ = new BehaviorSubject<boolean>(false);
    this._mapOptions$ = new BehaviorSubject<google.maps.MapOptions>({
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
    });
  }

  public setInitialMapOptions(): void {
    this._mapOptions$.next({
      ...this._mapOptions$.value,
      center: INITAL_MAP_COORDS,
      zoom: 6.5,
    });
  }

  public get mapOptions$(): Observable<google.maps.MapOptions> {
    return this._mapOptions$.asObservable();
  }

  public updateMapOptions(config: Partial<google.maps.MapOptions>): void {
    this._mapOptions$.next({
      ...this._mapOptions$.value,
      ...config,
    });
  }
}
