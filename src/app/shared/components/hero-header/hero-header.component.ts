import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  template: `
    <article
      class="flex h-full items-center justify-start"
      [ngClass]="{ 'justify-end': rtl }"
    >
      <div class="flex flex-col max-w-lg">
        <h2 class="title">
          <ng-content select="[title]"></ng-content>
        </h2>

        <div class="separator"></div>

        <p class="subtitle">
          <ng-content select="[subtitle]"></ng-content>
        </p>

        <ng-content select="[content]"></ng-content>
      </div>
    </article>
  `,
  styleUrls: ['./hero-header.component.scss'],
})
export class HeroHeaderComponent {
  @Input() public rtl: boolean = false;
}
