import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageDto } from '@core/models';
import { IAlbum, Lightbox } from 'ngx-lightbox';
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
            *ngFor="let image of displayedImages$ | async; let i = index"
            class="h-48 overflow-hidden rounded-md"
          >
            <img
              [src]="image.src"
              alt=""
              class="h-full w-full object-scale-down"
              (click)="openImage(i)"
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
  public allImages$: BehaviorSubject<Array<IAlbum>>;

  @Input() public set images(imgs: Array<ImageDto>) {
    this.allImages$.next(
      imgs.map(
        ({ url }: ImageDto): IAlbum => ({
          src: url,
          caption: 'caption',
          thumb: url,
        })
      )
    );
  }

  constructor(private readonly _lightBox: Lightbox) {
    this.allImages$ = new BehaviorSubject<Array<IAlbum>>([]);
  }

  public get displayedImages$(): Observable<Array<IAlbum>> {
    return this.allImages$.pipe(map((res) => res.slice(0, 5)));
  }

  public openImage(index: number): void {
    this._lightBox.open(this.allImages$.value, index);
  }
}
