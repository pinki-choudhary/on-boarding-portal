import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { DashBoardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LoginModule,
    DashBoardRoutingModule,
  ],
  exports: [
    DashboardComponent,
    DashBoardRoutingModule
  ]
})
export class DashboardModule { }
