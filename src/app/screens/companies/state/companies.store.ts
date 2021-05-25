import { Injectable } from '@angular/core';
import { CompanyDto, LocationDto } from '@core/models';
import { Store, StoreConfig } from '@datorama/akita';

export interface CompaniesState {
  companies: Array<CompanyDto>;
  location: LocationDto;
}

export const createInitialState = (): CompaniesState => ({
  companies: [],
  location: {
    lng: 0,
    lat: 0,
  },
});

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'companies' })
export class CompaniesStore extends Store<CompaniesState> {
  constructor() {
    super(createInitialState());
  }
}
