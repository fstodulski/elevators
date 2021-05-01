import { CdkDragMove } from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { CabinsMaterialsService } from './cabins-materials.service';

@Component({
  selector: 'app-cabins-materials',
  template: `
    <section
      class="grid grid-cols-2 gap-6 px-8 py-6"
      *ngIf="cabinsMaterialsService.cabinsHero$ | async as cabinsMaterials"
    >
      <figure class="images-preview">
        <div #leftMask class="mask mask:left"></div>
        <div class="mask mask:right"></div>
        <button
          cdkDragLockAxis="x"
          cdkDrag
          cdkDragBoundary=".images-preview"
          t-icon-button
          (cdkDragMoved)="moved($event)"
          type="button"
          icon="drag_indicator"
          class="drag"
        ></button>
        <img
          class="relative z-10"
          [src]="cabinsMaterials.images[0].url"
          alt=""
        />
      </figure>

      <article class="flex items-center justify-center">
        <div class="flex flex-col max-w-lg">
          <h2 class="text-h500 text-gray-900">
            {{ cabinsMaterials.title }}
          </h2>

          <div class="separator"></div>

          <p class="text-body:lg text-gray-600 ">
            {{ cabinsMaterials.subTitle }}
          </p>

          <nav class="flex flex-col mt-16">
            <div
              class="flex items-center mb-4"
              *ngFor="let material of cabinsMaterials.materials"
            >
              <figure class="mr-7">
                <img [src]="material.image.url" alt="" />
              </figure>

              <div class="flex flex-col">
                <h5 class="text-h200 text-gray-900">{{ material.title }}</h5>
                <a
                  [href]="material.link"
                  class="text-body:sm text-gray-600 underline mt-2"
                  >{{ material.link }}</a
                >
              </div>

              <button
                class="ml-auto"
                t-icon-button
                tWithContrast
                size="sm"
                icon="open_in_new"
              ></button>
            </div>
          </nav>
        </div>
      </article>
    </section>
  `,
  styleUrls: ['./cabins-materials.component.scss'],
})
export class CabinsMaterialsComponent implements OnInit {
  @ViewChild('leftMask') public readonly leftMask: ElementRef | undefined;

  constructor(
    public readonly cabinsMaterialsService: CabinsMaterialsService,
    public readonly renderer: Renderer2
  ) {
    this.leftMask = undefined;
  }

  public ngOnInit(): void {
    this.cabinsMaterialsService.cabinsHero();
  }

  public moved(event: CdkDragMove): void {
    this.renderer.setStyle(
      this.leftMask?.nativeElement,
      'transform',
      `translate3d(${event.distance.x}px, 0px, 0px)`
    );
  }
}
