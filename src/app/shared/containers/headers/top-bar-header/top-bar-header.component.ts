import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar-header',
  template: `
    <header
      class="w-full h-18 bg-white flex items-center overflow-hidden px-8 shadow-sm"
    >
      <div class="flex items-center">
        <figure>
          <img src="assets/icons/logo.svg" alt="" />
        </figure>

        <span class="text-sm ml-6 text-gray-600">
          Pomagamy Polskim biznesom wybrać najlepszą windę
        </span>
      </div>

      <app-main-navigation class="ml-auto"> </app-main-navigation>

      <nb-select class="lang-select ml-8">
        <nb-option *ngFor="let lang of langs" [value]="lang">
          <nb-icon [icon]="lang.icon"></nb-icon>
          {{ lang.lang }}
        </nb-option>
      </nb-select>
    </header>
  `,
  styleUrls: ['./top-bar-header.component.scss'],
})
export class TopBarHeaderComponent {
  public readonly langs: Array<{
    icon: string;
    lang: string;
    key: string;
  }>;
  constructor() {
    this.langs = [
      {
        icon: 'bell',
        lang: 'Polish',
        key: 'pl',
      },
    ];
  }
}
