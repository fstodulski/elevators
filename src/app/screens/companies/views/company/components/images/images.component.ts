import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageDto } from '@core/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-images',
  template: `
    <app-container>
      <ng-container title>Zdjęcia</ng-container>

      <ng-container *ngIf="allImages$ | async">
        <div class="grid gap-4 grid-cols-5">
          <figure
            *ngFor="let image of displayedImages$ | async"
            class="h-48 overflow-hidden rounded-md"
          >
            <img
              [src]="image.url"
              alt=""
              class="h-full w-full object-scale-down"
            />
          </figure>
        </div>
      </ng-container>
    </app-container>
  `,
  styleUrls: ['./images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesComponent {
  public allImages$: BehaviorSubject<Array<ImageDto>>;

  @Input() public set images(imgs: Array<ImageDto>) {
    this.allImages$.next(imgs);
  }

  constructor() {
    this.allImages$ = new BehaviorSubject<Array<ImageDto>>([]);
  }

  public get displayedImages$(): Observable<Array<ImageDto>> {
    return this.allImages$.pipe(map((res) => res.slice(0, 5)));
  }
}
