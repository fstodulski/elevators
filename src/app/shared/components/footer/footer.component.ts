import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="flex items-center px-8 py-7 border-t mt-16">
      <figure [routerLink]="['/windy']" class="mr-12 cursor-pointer">
        <img src="assets/icons/logo.svg" alt="" />
      </figure>

      <nav class="flex items-center">
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
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
