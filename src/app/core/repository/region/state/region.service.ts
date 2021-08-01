import { Injectable } from '@angular/core';
import { RegionRepository } from '@core/repository/region/region.repository';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Region } from './region.model';
import { RegionStore } from './region.store';

@Injectable({ providedIn: 'root' })
export class RegionService {
  constructor(
    private readonly regionStore: RegionStore,
    private readonly regionRepository: RegionRepository
  ) {}

  public getAll(): Observable<Array<Region>> {
    return this.regionRepository
      .regions()
      .pipe(tap((res) => this.regionStore.add(res)));
  }
}
