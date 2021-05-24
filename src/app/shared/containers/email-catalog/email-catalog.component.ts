import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-catalog',
  template: `
    <section class="email-catalog">
      <div
        class="max-w-screen-xl w-full mx-auto flex justify-between items-center"
      >
        <article class="email-article">
          <h6 class="title">Pobierz bezpłatny katalog kabin standardowych</h6>
          <p class="subtitle">
            Katalog zawiera kilka możliwych realizacji, opisy poszczególnych
            komponentów oraz wartości techniczne.
          </p>

          <form class="form">
            <div class="flex w-full">
              <input
                class="input"
                fullWidth
                nbInput
                placeholder="Twój Email"
                type="email"
                [formControl]="formControl"
              />

              <button nbButton status="primary" class="ml-6">
                <nb-icon icon="download-outline"> </nb-icon>
                Pobierz katalog
              </button>
            </div>

            <div class="flex w-full mt-6">
              <nb-checkbox status="basic">
                <span class="marketing">
                  Zgadzam się na przetwarzanie danych w celach marketingowych.
                </span>
              </nb-checkbox>
            </div>
          </form>
        </article>
        <figure>
          <img src="/assets/images/katalogi.png" alt="" />
        </figure>
      </div>
    </section>
  `,
  styleUrls: ['./email-catalog.component.scss'],
})
export class EmailCatalogComponent {
  public formControl: FormControl;

  constructor() {
    this.formControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }
}
