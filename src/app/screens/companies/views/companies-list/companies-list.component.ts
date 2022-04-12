import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDto } from '@core/models';
import { CompanyQuery, CompanyService } from '@core/repository';
import { LocationService } from '@core/services';
import {
  GEOLOCATION_SUPPORT,
  GeolocationService,
} from '@ng-web-apis/geolocation';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Component({
  selector: 'app-companies-list',
  template: `
    <ul class="list flex flex-col py-8 px-4 lg:px-8 overflow-auto relative" >
      <app-company-preview-card
        class="mb-6"
        [class.opacity-50]="isLoading$ | async"
        [company]="company"
        *ngFor="let company of companies$ | async"
      ></app-company-preview-card>

      <app-mobile-map class="md:hidden"></app-mobile-map>
    </ul>
  `,
  styleUrls: ['./companies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesListComponent implements OnInit, OnDestroy {
  public subs$: Subscription;

  public readonly companies$: Observable<Array<CompanyDto>> =
    this.companyQuery.selectAll();

  public readonly isLoading$: Observable<boolean> =
    this.companyQuery.selectLoading();

  constructor(
    private readonly _geolocation$: GeolocationService,
    private readonly companyQuery: CompanyQuery,
    private readonly _companyService: CompanyService,
    private readonly _locationService: LocationService,
    private readonly _toastService: HotToastService,
    @Inject(GEOLOCATION_SUPPORT) private readonly _geolocationSupport: boolean,
    private readonly _route: ActivatedRoute
  ) {
    this.subs$ = new Subscription();
  }

  public ngOnInit(): void {
    this._geolocationSupport && this._getCoords();

    this._route.queryParams.subscribe((res) => {
      this._fetchAllCompanies(res.slug);
      console.log(res)
    }

    );
  }

  public ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  private _fetchAllCompanies(slug?: string): void {
    this._companyService
      .getAll({
        region: '',
        name: '',
        slug: slug ? slug : '',
      })
      .subscribe();
  }

  private _getCoords(): void {
    this.subs$.add(
      this._geolocation$
        .pipe(
          take(1),
          catchError((e: Error): any => {
            return throwError(e.message);
          })
        )
        .subscribe(
          (res) => {
            if (res) {
              this._locationService.coords = {
                lat: (res as GeolocationPosition).coords.latitude,
                lng: (res as GeolocationPosition).coords.longitude,
              };
            }
          },
          (e: string) => {
            this._toastService.error(e);
          }
        )
    );
  }
}
