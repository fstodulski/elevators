import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="flex items-center px-8 py-7 border-t mt-16">
      <figure [routerLink]="['/windy']" class="mr-12 cursor-pointer">
        <img src="assets/icons/sygnet.svg" class="flex md:hidden" alt="" />
        <img src="assets/icons/logo.svg" class="hidden md:flex" alt="" />
      </figure>

      <nav class="items-center hidden md:flex">
        <a href="" class="text-body:md text-gray-600 mr-7">Regulamin</a>
        <a href="" class="text-body:md text-gray-600">Polityka prywatności</a>
      </nav>

      <figure class="ml-auto">
        <img src="assets/icons/instagram.svg" alt="" />
      </figure>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}
}
