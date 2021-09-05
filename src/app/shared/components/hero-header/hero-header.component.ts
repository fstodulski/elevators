import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  template: `
    <article
      class="flex h-full items-center"
      [ngClass]="{
        'justify-end': position === 'rtl',
        'justify-center': position === 'center',
        'justify-start': position === 'ltr'
      }"
    >
      <div class="flex flex-col max-w-lg">
        <h2 class="text-h500">
          <ng-content select="[title]"></ng-content>
        </h2>

        <div
          class="separator"
          [ngClass]="{
            'mr-auto': textAlign === 'ltr',
            'mx-auto': textAlign === 'center',
            'ml-auto': textAlign === 'rtl'
          }"
        ></div>

        <p class="text-body-lg font-light text-gray-600">
          <ng-content select="[subtitle]"></ng-content>
        </p>

        <ng-content select="[content]"></ng-content>
      </div>
    </article>
  `,
  styleUrls: ['./hero-header.component.scss'],
})
export class HeroHeaderComponent {
  @Input() public position: 'rtl' | 'ltr' | 'center' = 'ltr';
  @Input() public textAlign?: 'rtl' | 'ltr' | 'center' = 'ltr';
}
