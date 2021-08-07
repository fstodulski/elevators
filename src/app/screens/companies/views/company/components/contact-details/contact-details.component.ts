import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompanyDto } from '@core/models';

@Component({
  selector: 'app-contact-details',
  template: `
    <app-container>
      <ng-container title>Adres i kontakt</ng-container>
      <div class="flex flex-col">
        <div class="grid gap-6 grid-cols-2">
          <ng-container *ngFor="let company of companyDetails">
            <span class="text-h200 text-gray-900 font-bold">
              {{ company.label }}
            </span>

            <span class="text-body:md text-gray-600">
              {{ company.value }}
            </span>
          </ng-container>
        </div>
      </div>
    </app-container>
  `,
  styleUrls: ['./contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailsComponent {
  @Input() public company!: CompanyDto;

  constructor() {}

  public get companyDetails(): Array<{ [key: string]: string }> {
    return [
      {
        label: 'Nasz adres',
        value: `${this.company.streetName}, ${this.company.city}`,
      },
      {
        label: 'Numer telefonu',
        value: this.company.phoneNumber,
      },
      {
        label: 'Email',
        value: this.company.email,
      },
      {
        label: 'Facebook',
        value: this.company.facebook,
      },
      {
        label: 'Instagram',
        value: this.company.instagram,
      },
    ];
  }
}
