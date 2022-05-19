import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-inspirations-masonry',
  template: `
    <!-- <section class="w-full px-8 max-w-screen-xl container">
      <div ngx-masonry class="masonry" [options]="options">
          <div
          ngxMasonryItem
          class="flex flex-col masonry-item mb-5"
          *ngFor="let item of masonryItems; let i = index"
        >
          <figure class="overflow-hidden mb-2">
            <img
              [src]="['/assets/inspirations/' + item.img]"
              class="w-full h-full"
              alt=""
            />
          </figure>

          <div class="flex items-center">
            <span chip size="sm">Category</span>

            <span class="text-body:sm">Dzwig osobowy w Nowym Sączu</span>
          </div>
        </div>
      </div>
    </section> -->
    <section class="flex items-center justify-center pt-12">
      <a
        data-pin-do="embedBoard"
        data-pin-lang="pl"
        data-pin-board-width="2000"
        data-pin-scale-height="1100"
        data-pin-scale-width="195"
        href="https://www.pinterest.com/pinterest/official-news/"
      ></a>
    </section>
  `,
  styleUrls: ['./inspirations-masonry.component.scss'],
})
export class InspirationsMasonryComponent {
  // public readonly options: NgxMasonryOptions;
  // public masonryItems: Array<any> = [
  //   { img: 'el1.png' },
  //   { img: 'el2.png' },
  //   { img: 'el3.png' },
  //   { img: 'el4.png' },
  //   { img: 'el5.png' },
  //   { img: 'el6.png' },
  //   { img: 'el7.png' },
  //   { img: 'el8.png' },
  //   { img: 'el9.png' },
  //   { img: 'el10.png' },
  //   { img: 'el11.png' },
  // ];
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private readonly _document: Document
  ) {
    // this.options = {
    //   gutter: 20,
    // };
  }
  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://assets.pinterest.com/js/pinit.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }
}
