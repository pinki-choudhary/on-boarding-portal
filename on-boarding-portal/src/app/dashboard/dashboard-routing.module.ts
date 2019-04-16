import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { CustomMaterialModule} from '../shared/custom-material/custom-material.module';

import { OnBoardFormComponent } from '../dashboard/on-board-form/on-board-form.component';
import { StudentListComponent } from '../dashboard/student-list/student-list.component';

export const dashboardRoutes: Routes = [
  {path: '', redirectTo: 'onboard', pathMatch: 'full'},
  {path: 'onboard', component: OnBoardFormComponent},
  {path: 'onboard/view/:id', component: OnBoardFormComponent},
  {path: 'onboard/edit/:id', component: OnBoardFormComponent},
  {path: 'studentlist', component: StudentListComponent}
];

@NgModule({
  declarations: [OnBoardFormComponent, StudentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CustomMaterialModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ]
})
export class DashBoardRoutingModule { }
