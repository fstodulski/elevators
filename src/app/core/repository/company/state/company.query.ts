import { Injectable } from '@angular/core';
import { CompanyDto } from '@core/models';
import { MarkerType } from '@core/models/marker/marker.type';
import { QueryEntity } from '@datorama/akita';
import {
  CategoryIconsMapWithBg,
  CategoryIconsMapWithBgSelected,
} from '@shared/category-icons.map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CompanyState, CompanyStore } from './company.store';

const DEFAULT_ICON_URL = 'https://media.graphcms.com/mlIII3YRRa32KpKe3MGK';

@Injectable({ providedIn: 'root' })
export class CompanyQuery extends QueryEntity<CompanyState> {
  private readonly _categoryIconsMapWithBg: typeof CategoryIconsMapWithBg =
    CategoryIconsMapWithBg;
  private readonly _categoryIconsMapWithBgSelected: typeof CategoryIconsMapWithBgSelected =
    CategoryIconsMapWithBgSelected;

  public readonly recommended$: Observable<Array<CompanyDto>> =
    this.selectAll().pipe(map((res: Array<CompanyDto>) => res.slice(0, 3)));

  public readonly mapMarkers$: Observable<Array<MarkerType>> =
    this.selectAll().pipe(
      map(
        (res: Array<CompanyDto>): Array<MarkerType> =>
          res.map(
            ({ id, geoLat, geoLang, companyCategories, isMarkerSelected }) => {
              const icon = () => {
                if (companyCategories[0]) {
                  if (isMarkerSelected) {
                    return this._categoryIconsMapWithBgSelected[
                      companyCategories[0].icon
                    ];
                  }

                  if (!isMarkerSelected) {
                    return this._categoryIconsMapWithBg[
                      companyCategories[0].icon
                    ];
                  }
                }

                return DEFAULT_ICON_URL;
              };

              return {
                position: {
                  lat: geoLat,
                  lng: geoLang,
                },
                options: {
                  draggable: false,
                  clickable: true,
                  title: id,
                  icon: {
                    url: icon(),
                  },
                },
              };
            }
          )
      )
    );
  constructor(protected store: CompanyStore) {
    super(store);
  }
}
