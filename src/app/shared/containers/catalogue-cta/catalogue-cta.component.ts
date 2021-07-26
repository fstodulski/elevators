import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompanyDto } from '@core/models';
import { CatalogueCtaService } from '@shared/containers/catalogue-cta/catalogue-cta.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalogue-cta',
  template: `
    <section class="max-container py-12">
      <article class="flex flex-col w-full">
        <app-hero-header position="center" textAlign="center">
          <h3 title class="text-h500 text-gray-900 text-center">
            Czekamy na Twój telefon
          </h3>
          <p subtitle class="text-center">
            Firmy z wieloletnim doświadczeniem w branży dźwigowej, pomogą w
            dobraniu najlepszego dla Ciebie rozwiązania
          </p>
        </app-hero-header>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          <app-company-preview-card
            [richView]="false"
            *ngFor="let company of companiesInRange$ | async"
            [company]="company"
          ></app-company-preview-card>
        </div>
      </article>
    </section>
  `,
  styleUrls: ['./catalogue-cta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueCtaComponent implements OnInit {
  public readonly companiesInRange$: Observable<
    Array<Partial<CompanyDto>>
  > = this.catalogueCta.companiesInRange$;

  constructor(private readonly catalogueCta: CatalogueCtaService) {}

  public ngOnInit(): void {
    this.catalogueCta.getCompaniesInRange();
  }
}
