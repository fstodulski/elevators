import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { HotToastModule } from '@ngneat/hot-toast';
import { FooterModule } from '@shared/components';
import { TopBarHeaderModule } from '@shared/containers';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MarkdownModule } from 'ngx-markdown';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { TranslocoRootModule } from './transloco/transloco-root.module';

const modules = [TopBarHeaderModule, FooterModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ...modules,
    GraphQLModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TranslocoRootModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule,
    AngularSvgIconModule.forRoot(),
    HotToastModule.forRoot(),
    GalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
