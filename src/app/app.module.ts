import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetrisModule } from '@fstodulski/ngx-tetris';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TetrisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
