import { Injectable } from '@angular/core';
import { CabinsHeroDto } from '@core/models';
import { CabinsHeroRepositoryService as CabinsHeroServiceRepository } from '@core/repository';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CabinsRealisationService {
  public readonly isLoading$: BehaviorSubject<boolean>;
  private readonly data$: BehaviorSubject<CabinsHeroDto | undefined>;

  constructor(private readonly cabinsHeroService: CabinsHeroServiceRepository) {
    this.data$ = new BehaviorSubject<CabinsHeroDto | undefined>(undefined);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  public get cabinsHero$(): Observable<CabinsHeroDto | undefined> {
    return this.data$.asObservable();
  }

  public async cabinsHero(): Promise<void> {
    try {
      this.isLoading$.next(true);

      const data = await this.cabinsHeroService.cabinsHero().toPromise();
      console.log(data);

      this.data$.next(data);
    } finally {
      this.isLoading$.next(false);
    }
  }
}
