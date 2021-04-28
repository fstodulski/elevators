import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    SvgIconsModule.forRoot({
      sizes: {
        sm: '16px',
        md: '18px',
        lg: '20px',
        xl: '24px',
      },
      defaultSize: 'md',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
