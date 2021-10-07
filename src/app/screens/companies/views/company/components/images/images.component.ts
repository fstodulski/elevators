import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageDto } from '@core/models';

@Component({
  selector: 'app-images',
  template: `
    <app-container>
      <ng-container title>Zdjęcia</ng-container>

      <ng-container *ngIf="images">
        <div class="grid gap-4 grid-cols-5">
          <figure
            *ngFor="let image of images"
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
  @Input() public images: Array<ImageDto> | undefined = undefined;

  constructor() {}
}
