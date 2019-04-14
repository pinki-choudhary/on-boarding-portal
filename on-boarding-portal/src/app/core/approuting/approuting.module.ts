import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LoginModule } from '../../login/login.module';
import { DashboardModule } from '../../dashboard/dashboard.module';
import { PageNotFoundModule } from '../../shared/pagenotfound/pagenotfound.module';
import { AdminLoginComponent } from '../../login/admin-login/admin-login.component';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';

import { PageNotFoundComponent } from '../../shared/pagenotfound/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'login', component: AdminLoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: AdminLoginComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    DashboardModule,
    PageNotFoundModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    AdminLoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    RouterModule,
    LoginModule,
    DashboardModule,
    PageNotFoundModule
  ]
})
export class AppRoutingModule { }
