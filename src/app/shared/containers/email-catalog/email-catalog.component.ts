import { Component, OnDestroy } from '@angular/core';
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
          <form
            class="form"
            target="_blank"
            action="http://www.lechlifts.eu/www/download/Kat_Lech-min_PL.pdf"
          >
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
                [ngClass]="validity ? 'btn' : 'btn-disabled'"
                class="md:ml-6 mt-4 md:mt-0"
                (click)="subscribe()"
              >
                <span class="material-icons">file_download</span>
                Pobierz katalog
              </button>
            </div>

            <div class="flex w-full items-center mt-6">
              <input
                type="checkbox"
                id="check"
                class="mr-3"
                (change)="onKey($event)"
              />
              <span class="marketing">
                Zgadzam się na <a>przetwarzanie danych</a> w celach
                marketingowych.
              </span>
            </div>
            <!-- do wyjasnienia -->
            <!-- <ng-container
              class="text-body-md mt-5 text-red-200"
              *ngIf="formControl.invalid"
            ></ng-container> -->
          </form>
          <p class="text-body-md mt-5 text-red-200" id="error"></p>
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
  private value = '';
  public validity = false;

  constructor(private subscribeService: SubscribeService) {
    this.formControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
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
  //do sprawdzenia
  // public ngOnDestroy(): void {
  //   this.subscribeService.unsubscribe();
  // }
  public onKey(event: Event): void {
    console.log('dupa');
    var error = document.getElementById('error') as HTMLParagraphElement;
    var email = document.getElementById('email') as HTMLInputElement;
    var checkbox = document.getElementById('check') as HTMLInputElement;
    this.value += (event.target as HTMLInputElement).value;
    if (!email?.validity.valid || email.value == '') {
      error.innerHTML = 'Wprowadź poprawny email';
      this.validity = false;
    } else {
      if (checkbox.checked) {
        this.validity = true;
        error.innerHTML = '';
      } else {
        error.innerHTML = 'Zaznacz zgodę na przetwarzanie danych';
        this.validity = false;
      }
    }
  }
}
