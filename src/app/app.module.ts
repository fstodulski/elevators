import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTetrisModule } from '@fstodulski/ngx-tetris';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTetrisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
