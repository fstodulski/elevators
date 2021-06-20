import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar-header',
  template: `
    <header
      class="w-full h-18 bg-white flex items-center overflow-hidden px-8 shadow-sm containe"
    >
      <div class="flex items-center">
        <figure>
          <img src="assets/icons/logo.svg" class="hidden md:flex" alt="" />
          <img src="assets/icons/sygnet.svg" class="flex md:hidden" alt="" />
        </figure>

        <span class="text-sm ml-6 text-gray-600 hidden xl:inline">
          Pomagamy Polskim biznesom wybrać najlepszą windę
        </span>
      </div>

      <app-main-navigation class="ml-auto"> </app-main-navigation>
      <app-mobile-navigation></app-mobile-navigation>
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
