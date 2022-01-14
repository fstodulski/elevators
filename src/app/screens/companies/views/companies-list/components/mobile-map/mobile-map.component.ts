import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-mobile-map',
  template: `
    <button
      class="absolute left-0 text-h300 py-3 px-10 bg-white border border-primary-800 bottom-6 map-btn"
      (click)="displayMap()"
    >
      Mapa
    </button>

    <aside
      class="map fixed z-10 w-full bg-black"
      [ngClass]="{ 'map--opened': (isMapOpen$ | async) === true }"
    >
      <app-companies-map></app-companies-map>

      <button
        (click)="hideMap()"
        class="z-20 absolute bottom-10 text-h300 py-3 px-10 bg-white border border-primary-800 centered-absolute"
      >
        Close
      </button>
    </aside>
  `,
  styleUrls: ['./mobile-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMapComponent implements OnInit {
  private _isMapOpen$: BehaviorSubject<boolean>;

  constructor() {
    this._isMapOpen$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {}

  public get isMapOpen$(): Observable<boolean> {
    return this._isMapOpen$.asObservable();
  }

  public displayMap(): void {
    this._isMapOpen$.next(true);
  }

  public hideMap(): void {
    this._isMapOpen$.next(false);
  }
}
