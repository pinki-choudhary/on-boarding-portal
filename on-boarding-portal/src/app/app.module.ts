import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/approuting/approuting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
