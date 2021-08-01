import { Injectable } from '@angular/core';
import { CompanyDto } from '@core/models';
import { CompanyRepository } from '@core/repository';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogueCtaService {
  private readonly subs$: BehaviorSubject<Array<Partial<CompanyDto>>>;

  constructor(private readonly companyRepository: CompanyRepository) {
    this.subs$ = new BehaviorSubject<Array<Partial<CompanyDto>>>([]);
  }

  public getCompaniesInRange(): void {
    this.companyRepository
      .companiesInRange()
      .subscribe((res) => this.subs$.next(res));
  }

  public get companiesInRange$(): Observable<Array<Partial<CompanyDto>>> {
    return this.subs$.asObservable();
  }
}
