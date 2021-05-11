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

        <h2 class="text-sm ml-6 text-gray-600">
          Pomagamy Polskim biznesom wybrać najlepszą windę
        </h2>
      </div>

      <app-main-navigation class="ml-auto"> </app-main-navigation>

      <button t-button class="ml-8">Zamów ofertę</button>
    </header>
  `,
  styleUrls: ['./top-bar-header.component.scss'],
})
export class TopBarHeaderComponent {
  constructor() {}
}
