import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-inspirations-masonry',
  template: `
    <section class="w-full px-8">
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
    </section>
  `,
  styleUrls: ['./inspirations-masonry.component.scss'],
})
export class InspirationsMasonryComponent implements OnInit {
  public readonly options: NgxMasonryOptions;
  public masonryItems: Array<any> = [
    { img: 'el1.png' },
    { img: 'el2.png' },
    { img: 'el3.png' },
    { img: 'el4.png' },
    { img: 'el5.png' },
    { img: 'el6.png' },
    { img: 'el7.png' },
    { img: 'el8.png' },
    { img: 'el9.png' },
    { img: 'el10.png' },
    { img: 'el11.png' },
  ];
  constructor() {
    this.options = {
      gutter: 20,
    };
  }

  ngOnInit(): void {}
}
