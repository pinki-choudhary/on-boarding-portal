import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './core/approuting/approuting.module';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
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
