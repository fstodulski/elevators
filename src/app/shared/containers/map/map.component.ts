import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-map',
  template: ` <p>map works!</p> `,
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  constructor() {}
}
