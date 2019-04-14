import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule} from '../shared/custom-material/custom-material.module';

import { OnBoardFormComponent } from '../dashboard/on-board-form/on-board-form.component';
import { StudentListComponent } from '../dashboard/student-list/student-list.component';

const dashboardRoutes: Routes = [
  {path: 'onboard', component: OnBoardFormComponent},
  {path: 'studentlist', component: StudentListComponent}
];

@NgModule({
  declarations: [OnBoardFormComponent, StudentListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    CustomMaterialModule
  ],
  exports: [
    RouterModule,
    CustomMaterialModule
  ]
})
export class DashBoardRoutingModule { }
