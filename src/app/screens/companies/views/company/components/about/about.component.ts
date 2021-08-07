import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompanyDto } from '@core/models';

@Component({
  selector: 'app-about',
  template: `
    <app-container>
      <ng-container title>O firmie</ng-container>
      <div class="flex items-center mb-4">
        <span class="text-body:md text-gray-900 mr-6">Specjalizacja:</span>

        <span class="text-gray-900 text-body:sm">Montaż</span>
      </div>

      <article
        markdown
        ngPreserveWhitespaces
        class="text-body:md text-gray-600"
      >
        {{ company.longDescriptionv2.markdown }}
      </article>
    </app-container>
  `,
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  @Input() public company!: CompanyDto;

  constructor() {}
}
