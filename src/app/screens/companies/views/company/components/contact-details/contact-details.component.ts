import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { CompanyDto } from '@core/models';
import { WINDOW } from '@ng-web-apis/common';

import { ContactDetailsInterface } from './contact-details.interface';

@Component({
  selector: 'app-contact-details',
  template: `
    <app-container>
      <ng-container title>Adres i kontakt</ng-container>
      <ng-container *ngIf="company">
        <div class="flex flex-col">
          <div class="grid gap-6 grid-cols-6">
            <ng-container *ngFor="let company of companyDetails">
              <div class="col-start-1 col-end-3 md:col-end-2">
                <span class="text-h200 text-gray-900 font-bold">
                  {{ company.label }}
                </span>
              </div>

              <div class="col-start-3 md:col-start-2 col-end-6">
                <span
                  class="text-body:md text-gray-600"
                  [class.cursor-pointer]="company.onClick"
                  (click)="company.onClick && company.onClick()"
                >
                  {{ company.value }}
                </span>
              </div>
            </ng-container>
          </div>
        </div>
      </ng-container>
    </app-container>
  `,
  styleUrls: ['./contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailsComponent {
  @Input() public company: CompanyDto | undefined = undefined;

  constructor(@Inject(WINDOW) private readonly _window: Window) {}

  public get companyDetails(): Array<ContactDetailsInterface> {
    return this.company !== undefined
      ? [
          {
            label: 'Nasz adres',
            value: `${this.company.streetName}, ${this.company.city}`,
          },
          {
            label: 'Numer telefonu',
            value: this.company.phoneNumber,
            onClick: () => {
              this._window.location.href = `tel:${this.company!.email}`;
            },
          },
          {
            label: 'Email',
            value: this.company.email,
            onClick: () => {
              this._window.location.href = `mailto:${this.company!.email}`;
            },
          },
          {
            label: 'Facebook',
            value: this.company.facebook || '-',
          },
          {
            label: 'Instagram',
            value: this.company.instagram || '-',
          },
        ]
      : [];
  }
}
