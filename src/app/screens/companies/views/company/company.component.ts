import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-company',
  template: ` <p>company works!</p> `,
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent {
  constructor() {}
}
