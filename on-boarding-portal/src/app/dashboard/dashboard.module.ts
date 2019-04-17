import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { DashBoardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

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
export class DashboardModule { }
