import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sort-by',
  template: `
    <section class="flex w-full py-4 px-8 justify-end bg-white shadow-sm">
      <div class="flex items-align">
        <span class="text-body:sm text-gray-400"> Sortuj: </span>

        <span class="text-body:sm text-gray-400 ml-3"> Najnowszy </span>
      </div>
    </section>
  `,
  styleUrls: ['./sort-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortByComponent {
  constructor() {}
}
