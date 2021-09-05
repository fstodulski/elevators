import { Component } from '@angular/core';

@Component({
  selector: 'app-inspirations-header',
  template: `
    <section class="w-full py-24 bg-main-800 flex items-center px-8">
      <article class="my-auto max-w-screen-md">
        <h3 class="text-h300 sm:text-h500 md:text-h400 lg:text-h600 text-white">
          Największa kolekcja realizacji wnętrz dźwigów osobowych, towarowych i
          gastronomicznych: przykłady, schematy i inspiracje.
        </h3>
      </article>
    </section>
  `,
  styleUrls: ['./inspirations-header.component.scss'],
})
export class InspirationsHeaderComponent {
  constructor() {}
}
