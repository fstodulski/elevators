import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabins-realisation',
  template: `
    <section class="grid grid-cols-2 gap-6 px-8 py-6">
      <article class="flex items-center justify-center">
        <div class="flex flex-col max-w-lg">
          <h2 class="text-h500 text-gray-900">
            Kabiny wind dla najbardziej wymagających i te o ekonomicznym
            charakterze.
          </h2>
          <div class="separator"></div>
          <p class="text-body:lg text-gray-600">
            Wszystkie je mamy! Indywidualny charakter Twojemu urządzeniu nadaje
            dobrze zaprojektowana i wykonana kabina windy.
          </p>

          <nav class="flex flex-wrap mt-10">
            <a chip>Wszystkie inspiracje</a>
          </nav>
        </div>
      </article>

      <figure class="flex items-center">
        <img
          class="w-full"
          src="assets/inspirations/el1.png"
          loading="lazy"
          alt=""
        />
      </figure>
    </section>
  `,
  styleUrls: ['./cabins-realisation.component.scss'],
})
export class CabinsRealisationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
