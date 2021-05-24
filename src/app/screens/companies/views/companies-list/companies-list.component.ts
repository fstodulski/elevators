import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-list',
  template: `
    <ul class="flex flex-col py-4 px-8">
      <li class="card">
        <figure class="company-logo-wrapper">
          <img
            class="company-logo"
            src="/assets/images/logo_placeholder.png"
            alt=""
          />
        </figure>
        <article class="w-full ml-4">
          <div class="flex justify-between mb-2">
            <h3 class="company-name">Jerzy Windy</h3>
            <span class="company-short-description">Produkujemy</span>
            <a class="phone" href="">
              <nb-icon icon="phone-outline"></nb-icon>
              +48 794 798 423
            </a>
          </div>

          <div class="flex justify-between w-full">
            <span class="company-street-name">
              Białystok, ul. Jurowiecka 42/8
            </span>

            <div class="flex items-center ml-auto">
              <span class="tag"> Produkcja </span>
            </div>
          </div>
        </article>
      </li>
    </ul>
  `,
  styleUrls: ['./companies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
