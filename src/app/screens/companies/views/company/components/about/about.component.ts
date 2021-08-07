import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CompanyDto } from '@core/models';

@Component({
  selector: 'app-about',
  template: `
    <article class="flex flex-col bg-white px-4 py-5 shadow-sm mt-8 rounded-md">
      <h4 class="text-h400 text-gray-900 mb-4">O firmie</h4>

      <div class="flex flex-col mt-4">
        <div class="flex items-center mb-4">
          <span class="text-body:md text-gray-900 mr-6">Specjalizacja:</span>

          <span class="text-gray-900 text-body:sm">Montaż</span>
        </div>

        <p class="text-body:md text-gray-600">{{ company.longDescription }}</p>
      </div>
    </article>
  `,
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  @Input() public company!: CompanyDto;

  constructor() {}

  ngOnInit(): void {}
}
