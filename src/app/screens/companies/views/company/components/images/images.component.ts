import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  Input,
} from '@angular/core';
import { ImageDto } from '@core/models';
import { WINDOW } from '@ng-web-apis/common';
import { IAlbum, Lightbox } from 'ngx-lightbox';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-images',
  template: `
    <app-container>
      <ng-container title>Zdjęcia</ng-container>

      <ng-container *ngIf="allImages$ | async">
        <div class="grid gap-4 2xl:grid-cols-6 grid-cols-5">
          <figure
            *ngFor="let image of displayedImages$ | async; let i = index"
            class="h-48 overflow-hidden rounded-md relative cursor-pointer"
          >
            <ng-container *ngIf="i + 1 === (columnsToDisplay$ | async)">
              <div
                class="bg-black opacity-80 absolute top-0 left-o w-full h-full flex items-center justify-center pointer-events-none"
              >
                <div
                  class="rounded-full flex items-center justify-center w-12 h-12 bg-gray-700"
                >
                  <span class="text-h300 text-white">
                    +{{ restImages$ | async }}
                  </span>
                </div>
              </div>
            </ng-container>
            <img
              [src]="image.src"
              alt=""
              class="h-full w-full object-cover"
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
  public readonly isExtraLargeScreen$: BehaviorSubject<boolean>;
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

  @HostListener('window:resize', ['$event.target'])
  private onResize(event: Window): void {
    this.isExtraLarge(event.innerWidth)
      ? this.isExtraLargeScreen$.next(true)
      : this.isExtraLargeScreen$.next(false);
  }

  public get columnsToDisplay$(): Observable<number> {
    return this.isExtraLargeScreen$.pipe(
      map((isExtraLarge) => (isExtraLarge ? 6 : 5))
    );
  }

  constructor(
    @Inject(WINDOW) private readonly _window: Window,
    private readonly _lightBox: Lightbox
  ) {
    this.allImages$ = new BehaviorSubject<Array<IAlbum>>([]);
    this.isExtraLargeScreen$ = new BehaviorSubject<boolean>(
      this.isExtraLarge(this._window.innerWidth)
    );
  }

  public get displayedImages$(): Observable<Array<IAlbum>> {
    return this.columnsToDisplay$.pipe(
      switchMap((res) =>
        this.allImages$.pipe(map((images) => images.slice(0, res)))
      )
    );
  }

  public get restImages$(): Observable<number> {
    return combineLatest([this.allImages$, this.displayedImages$]).pipe(
      map(([allImages, displayedImages]) => {
        return allImages.length - displayedImages.length;
      })
    );
  }

  public openImage(index: number): void {
    this._lightBox.open(this.allImages$.value, index);
  }

  private isExtraLarge(width: number): boolean {
    return width > 1536;
  }
}
