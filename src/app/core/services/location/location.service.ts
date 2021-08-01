import { Injectable } from '@angular/core';
import { LocationDto } from '@core/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private readonly _coords: BehaviorSubject<LocationDto>;

  constructor() {
    this._coords = new BehaviorSubject<LocationDto>({
      lat: 0,
      lng: 0,
    });
  }

  public set coords({ lat, lng }: LocationDto) {
    this._coords.next({
      lat,
      lng,
    });
  }

  public get coords(): LocationDto {
    return this._coords.getValue();
  }

  public get coords$(): Observable<LocationDto> {
    return this._coords.asObservable();
  }
}
