import { Component } from '@angular/core';

@Component({
  selector: 'app-inspirations',
  template: `
    <main>
      <app-inspirations-header></app-inspirations-header>
      <app-inspirations-categories></app-inspirations-categories>
    </main>
  `,
  styleUrls: ['./inspirations.component.scss'],
})
export class InspirationsComponent {
  constructor() {}
}
