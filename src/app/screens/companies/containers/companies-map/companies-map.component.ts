import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '@env';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-companies-map',
  template: `
    <div *ngIf="apiLoaded | async" class="companies-map">
      <google-map
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

  public readonly mapOptions: google.maps.MapOptions;

  constructor(public readonly httpClient: HttpClient) {
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

  public ngOnInit(): void {}
}
