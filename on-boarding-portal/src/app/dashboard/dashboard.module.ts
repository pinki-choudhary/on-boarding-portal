import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from '../login/login.module';
import { CustomMaterialModule} from '../shared/custom-material/custom-material.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OnBoardFormComponent } from './on-board-form/on-board-form.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [DashboardComponent, OnBoardFormComponent, StudentListComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    LoginModule
  ],
  exports: [
    DashboardComponent,
    OnBoardFormComponent,
    StudentListComponent
  ]
})
export class DashboardModule { }
