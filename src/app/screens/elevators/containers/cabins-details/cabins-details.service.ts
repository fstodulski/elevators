import { Injectable } from '@angular/core';
import { CabinsDetailsDto } from '@core/models';
import { CabinsDetailsRepositoryService } from '@core/repository';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CabinsDetailsService {
  public readonly isLoading$: BehaviorSubject<boolean>;
  private readonly data$: BehaviorSubject<CabinsDetailsDto | undefined>;

  constructor(
    private readonly cabinsDetailsRepositoryService: CabinsDetailsRepositoryService
  ) {
    this.data$ = new BehaviorSubject<CabinsDetailsDto | undefined>(undefined);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  public get cabinDetails$(): Observable<CabinsDetailsDto | undefined> {
    return this.data$.asObservable();
  }

  public async cabinDetails(): Promise<void> {
    try {
      this.isLoading$.next(true);

      const data = await this.cabinsDetailsRepositoryService
        .cabinsDetails()
        .toPromise();

      this.data$.next(data);
    } finally {
      this.isLoading$.next(false);
    }
  }
}
