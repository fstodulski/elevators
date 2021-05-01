import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'span[chip],a[chip]',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  @Input() public set size(size: 'sm' | 'md' | 'lg') {
    this.renderer.addClass(this.el.nativeElement, size);
  }

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) {}
}
