import { Injectable } from '@angular/core';
import { CabinsRealisationDto } from '@core/models';
import { CabinsRealisationRepositoryService } from '@core/repository';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CabinsRealisationService {
  public readonly isLoading$: BehaviorSubject<boolean>;
  private readonly data$: BehaviorSubject<CabinsRealisationDto | undefined>;

  constructor(
    private readonly cabinsRealisationRepositoryService: CabinsRealisationRepositoryService
  ) {
    this.data$ = new BehaviorSubject<CabinsRealisationDto | undefined>(
      undefined
    );
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  public get cabinsRealisation$(): Observable<
    CabinsRealisationDto | undefined
  > {
    return this.data$.asObservable();
  }

  public async cabinsRealisation(): Promise<void> {
    try {
      this.isLoading$.next(true);

      const data = await this.cabinsRealisationRepositoryService
        .cabinRealisation()
        .toPromise();
      console.log(data);

      this.data$.next(data);
    } finally {
      this.isLoading$.next(false);
    }
  }
}
