import { Injectable } from '@angular/core';
import { LocationDto } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  public getCurrentLocation(): LocationDto | undefined {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }: GeolocationPosition): LocationDto => ({
          lat: coords.latitude,
          lng: coords.longitude,
        })
      );
    }

    return undefined;
  }
}
