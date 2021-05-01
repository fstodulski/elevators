import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <nav class="flex items-center justify-center">
      <button
        t-icon-button
        icon="arrow_left"
        tWithContrast
        class="mr-4"
      ></button>
      <a class="single-page selected" href="">1</a>
      <a class="single-page" href="">1</a>
      <a class="single-page" href="">1</a>
      <a class="single-page" href="">1</a>
      <a class="single-page" href="">1</a>
      <a class="single-page" href="">...</a>
      <a class="single-page" href="">12</a>
      <button t-icon-button icon="arrow_right" class="ml-4"></button>
    </nav>
  `,
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() public readonly max: number;
  constructor() {
    this.max = 12;
  }
}
