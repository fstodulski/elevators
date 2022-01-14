import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkerType } from '@core/models/marker/marker.type';
import { CompanyQuery, CompanyService } from '@core/repository';
import { LocationService } from '@core/services';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { CompaniesMapService } from './companies-map.service';

@Component({
  selector: 'app-companies-map',
  template: `
    <ng-container
      *ngIf="_companiesMapService.mapOptions$ | async as mapOptions"
    >
      <div class="companies-map">
        <google-map width="100%" height="100%" [options]="mapOptions">
          <map-marker
            *ngFor="let marker of mapMarkers$ | async"
            [position]="marker.position"
            [options]="marker.options"
            (mapClick)="clickOnMarker(marker)"
          ></map-marker>
        </google-map>
      </div>
    </ng-container>
  `,
  styleUrls: ['./companies-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesMapComponent implements OnInit {
  public readonly mapMarkers$: Observable<Array<MarkerType>> =
    this._companyQuery.mapMarkers$.pipe(share());

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly locationService: LocationService,
    private readonly _companyQuery: CompanyQuery,
    private readonly _companyService: CompanyService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    public readonly _companiesMapService: CompaniesMapService
  ) {}

  public ngOnInit(): void {
    this._companiesMapService.setInitialMapOptions();
  }

  public clickOnMarker(marker: MarkerType): void {
    this._companyService.select(marker.options.title as string);

    this._router.navigate([marker.options.title], {
      relativeTo: this._route,
    });

    this._companiesMapService.updateMapOptions({
      center: marker.position,
      zoom: 15,
    });
  }
}
