import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
