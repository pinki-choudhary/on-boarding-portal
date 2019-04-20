import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '../shared/shared-material.module';

import { OnBoardFormComponent } from '../dashboard/on-board-form/on-board-form.component';
import { StudentListComponent } from '../dashboard/student-list/student-list.component';

/**
 * dashboardRoutes constant that holds the array of routes for dashboard.
 * '' route redirects to onboard page.
 * onboard page takes user to onboard page.
 * onboard/actiontype/id allows user to edit or view the student.
 * studentlist route lists all the student on studnet list page.
 */
export const dashboardRoutes: Routes = [
  {path: '', redirectTo: 'onboard', pathMatch: 'full'},
  {path: 'onboard', component: OnBoardFormComponent},
  {path: 'onboard/:actionType/:id', component: OnBoardFormComponent},
  {path: 'studentlist', component: StudentListComponent}
];

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [OnBoardFormComponent, StudentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class DashBoardRoutingModule { }
