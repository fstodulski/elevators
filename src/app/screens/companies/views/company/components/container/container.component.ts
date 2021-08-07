import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <section class="flex flex-col bg-white px-4 py-5 shadow-sm mt-8 rounded-md">
      <h4 class="text-h400 text-gray-900 font-bold mb-4">
        <ng-content select="[title]"></ng-content>
      </h4>

      <div class="flex flex-col mt-4">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  constructor() {}
}
