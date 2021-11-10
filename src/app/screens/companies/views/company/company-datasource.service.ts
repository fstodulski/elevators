import { Injectable } from '@angular/core';
import { CompanyDto } from '@core/models';
import { CompanyService } from '@core/repository';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompanyDatasourceService {
  private readonly _company$: BehaviorSubject<CompanyDto | undefined>;

  constructor(private readonly _companyService: CompanyService) {
    this._company$ = new BehaviorSubject<CompanyDto | undefined>(undefined);
  }

  public get company$(): Observable<CompanyDto | undefined> {
    return this._company$.asObservable();
  }

  public set company(value: CompanyDto) {
    this._company$.next(value);
  }

  public fetchCompany(): Observable<CompanyDto> {
    return this._companyService.company().pipe(
      tap((res) => {
        this.company = res;
      })
    );
  }

  public destroy(): void {
    this._company$.next(undefined);
  }
}
