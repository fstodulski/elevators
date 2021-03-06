import { Injectable } from '@angular/core';
import { CabinsHeroDto } from '@core/models';
import { CabinsHeroRepositoryService } from '@core/repository';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CabinsHeroService {
  public readonly isLoading$: BehaviorSubject<boolean>;
  private readonly data$: BehaviorSubject<CabinsHeroDto | undefined>;

  constructor(
    private readonly cabinsHeroRepositoryService: CabinsHeroRepositoryService
  ) {
    this.data$ = new BehaviorSubject<CabinsHeroDto | undefined>(undefined);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  public get cabinsHero$(): Observable<CabinsHeroDto | undefined> {
    return this.data$.asObservable();
  }

  public async cabinsHero(): Promise<void> {
    try {
      this.isLoading$.next(true);

      const data = await this.cabinsHeroRepositoryService
        .cabinsHero()
        .toPromise();

      this.data$.next(data);
    } finally {
      this.isLoading$.next(false);
    }
  }
}
