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
      class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-8 py-6 max-w-screen-xl mx-auto container"
      *ngIf="cabinsMaterialsService.cabinsHero$ | async as cabinsMaterials"
    >
      <figure class="images-preview">
        <div #leftMask class="mask mask:left"></div>
        <div class="mask mask:right"></div>

        <nb-icon
          cdkDragLockAxis="x"
          cdkDrag
          cdkDragBoundary=".images-preview"
          (cdkDragMoved)="moved($event)"
          class="drag"
          status="control"
          icon="move-outline"
        ></nb-icon>
        <img
          class="relative z-10"
          [src]="cabinsMaterials.images[0].url"
          alt=""
        />
      </figure>

      <app-hero-header [rtl]="true">
        <ng-container title> {{ cabinsMaterials.title }} </ng-container>
        <ng-container subtitle>{{ cabinsMaterials.subTitle }}</ng-container>
        <ng-container content>
          <nav class="grid grid-cols-2 gap-5 mt-4">
            <div
              class="bg-white rounded-sm shadow:sm flex items-center py-3 px-2"
              *ngFor="let material of cabinsMaterials.materials"
            >
              <figure class="md:mr-7 mr-2 image-wrapper">
                <img class="image" [src]="material.image.url" alt="" />
              </figure>

              <div class="flex flex-col">
                <h5 class="material-title">{{ material.title }}</h5>
                <a [href]="material.link" class="material-link" target="_blank">
                  {{ material.link }}
                </a>
              </div>
            </div>
          </nav>
        </ng-container>
      </app-hero-header>
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
