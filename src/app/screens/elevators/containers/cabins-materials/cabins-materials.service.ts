import { Injectable } from '@angular/core';
import { CabinsMaterialsDto } from '@core/models';
import { CabinsMaterialsRepositoryService } from '@core/repository';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CabinsMaterialsService {
  public readonly isLoading$: BehaviorSubject<boolean>;
  private readonly data$: BehaviorSubject<CabinsMaterialsDto | undefined>;

  constructor(
    private readonly cabinsMaterialsRepositoryService: CabinsMaterialsRepositoryService
  ) {
    this.data$ = new BehaviorSubject<CabinsMaterialsDto | undefined>(undefined);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  public get cabinsHero$(): Observable<CabinsMaterialsDto | undefined> {
    return this.data$.asObservable();
  }

  public async cabinsHero(): Promise<void> {
    try {
      this.isLoading$.next(true);

      const data = await this.cabinsMaterialsRepositoryService
        .cabinsMaterials()
        .toPromise();

      this.data$.next(data);
    } finally {
      this.isLoading$.next(false);
    }
  }
}
