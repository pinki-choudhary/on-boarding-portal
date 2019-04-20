// This is dashboard feature module.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { DashBoardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [DashboardComponent, DialogBoxComponent],
  imports: [
    CommonModule,
    LoginModule,
    DashBoardRoutingModule,
  ],
  exports: [
    DashboardComponent,
    DashBoardRoutingModule
  ],
  entryComponents: [DialogBoxComponent]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class DashboardModule { }
