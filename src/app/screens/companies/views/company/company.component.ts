import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-company',
  template: `
    <p>
      company works!
    </p>
  `,
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
