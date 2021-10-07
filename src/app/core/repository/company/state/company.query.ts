import { Injectable } from '@angular/core';
import { CompanyDto } from '@core/models';
import { MarkerType } from '@core/models/marker/marker.type';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CompanyState, CompanyStore } from './company.store';

const DEFAULT_ICON_URL = 'https://media.graphcms.com/mlIII3YRRa32KpKe3MGK';

@Injectable({ providedIn: 'root' })
export class CompanyQuery extends QueryEntity<CompanyState> {
  public readonly recommended$: Observable<Array<CompanyDto>> =
    this.selectAll().pipe(map((res: Array<CompanyDto>) => res.slice(0, 3)));

  public readonly mapMarkers$: Observable<Array<MarkerType>> =
    this.selectAll().pipe(
      map(
        (res: Array<CompanyDto>): Array<MarkerType> =>
          res.map(({ id, geoLat, geoLang, companyCategories }) => ({
            position: {
              lat: geoLat,
              lng: geoLang,
            },
            options: {
              draggable: false,
              clickable: true,
              title: id,
              icon: {
                url: companyCategories[0]
                  ? companyCategories[0].icon.url || DEFAULT_ICON_URL
                  : DEFAULT_ICON_URL,
              },
            },
          }))
      )
    );
  constructor(protected store: CompanyStore) {
    super(store);
  }
}
