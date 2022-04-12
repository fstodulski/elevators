import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SubscribeService } from '@core/services/mailchimp/subscribe.service';

@Component({
  selector: 'app-email-catalog',
  template: `
    <section class="email-catalog w-full bg-main-900 flex flex-col mt-12">
      <div
        class="max-w-screen-xl w-full mx-auto flex flex-col-reverse md:flex-row justify-between items-center container"
      >
        <article class="email-article">
          <h6 class="title">Pobierz bezpłatny katalog kabin standardowych</h6>
          <p class="subtitle">
            Katalog zawiera kilka możliwych realizacji, opisy poszczególnych
            komponentów oraz wartości techniczne.
          </p>
          <form class="form" action="#">
            <div class="flex flex-col md:flex-row w-full">
              <input
                class="input flex-grow"
                placeholder="Twój Email"
                type="email"
                id="email"
                [formControl]="formControl"
                (keyup)="onKey($event)"
              />

              <button
                class="btn md:ml-6 mt-4 md:mt-0"
                (click)="subscribe()"
                [ngClass]="this.formControl.value.errors ? 'disabled' : ''"
              >
                <span class="material-icons">file_download</span>
                Pobierz katalog
              </button>
              <p id="error"></p>
            </div>

            <div class="flex w-full items-center mt-6">
              <input type="checkbox" class="mr-3" />
              <span class="marketing">
                Zgadzam się na <a>przetwarzanie danych</a> w celach
                marketingowych.
              </span>
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
  private error;
  private email;
  private value = '';

  constructor(private subscribeService: SubscribeService) {
    this.formControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.error = document.querySelector('error') as HTMLParagraphElement;
    this.email = document.querySelector('email') as HTMLInputElement;
  }

  public subscribe(): any {
    return this.subscribeService
      .subscribeToList(this.formControl.value)
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
  public onKey(event: KeyboardEvent): void {
    this.value += (event.target as HTMLInputElement).value;
    console.log(this.error);
    if (!this.email?.validity.valid) {
      var txt = document.createTextNode('Please enter correct email');
      this.error.appendChild(txt);
    } else this.error.textContent = '';
  }
}
