import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <nav class="flex items-center justify-center">
      <button nbButton ghost class="mr-4">
        <nb-icon icon="chevron-left-outline"></nb-icon>
      </button>
      <a class="single-page selected" href="">1</a>
      <a class="single-page" href="">1</a>
      <a class="single-page" href="">1</a>
      <a class="single-page" href="">1</a>
      <a class="single-page" href="">1</a>
      <a class="single-page" href="">...</a>
      <a class="single-page" href="">12</a>
      <button nbButton class="ml-4">
        <nb-icon icon="chevron-right-outline"></nb-icon>
      </button>
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
