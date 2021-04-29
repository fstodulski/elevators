import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspirations-header',
  template: `
    <section class="w-full h-112 bg-main-800 flex items-center px-8">
      <article class="my-auto max-w-screen-md">
        <h3 class="text-h600 text-white">
          Największa kolekcja realizacji wnętrz dźwigów osobowych, towarowych i
          gastronomicznych: przykłady, schematy i inspiracje.
        </h3>
      </article>
    </section>
  `,
  styleUrls: ['./inspirations-header.component.scss'],
})
export class InspirationsHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
