import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { dashboardRoutes } from '../../dashboard/dashboard-routing.module';
import { LoginModule } from '../../login/login.module';
import { DashboardModule } from '../../dashboard/dashboard.module';
import { PageNotFoundModule } from '../../shared/pagenotfound/pagenotfound.module';
import { AdminLoginComponent } from '../../login/admin-login/admin-login.component';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';

import { PageNotFoundComponent } from '../../shared/pagenotfound/page-not-found/page-not-found.component';
import { DashboardCanActivateGuard } from '../../login/dashboard-can-activate.guard';
import { LoginCanActivateGuard } from '../../dashboard/login-can-activate.guard';


/** Routes constant that contains the routes for the application
 * '' route redirects to login page.
 * login route takes user to login page.
 * dashboard route takes user to dashboard page only when user is logged in.
 * any other wild card route will lead to an 404 page.
 */
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: AdminLoginComponent, canActivate: [LoginCanActivateGuard]},
  {path: 'dashboard', component: DashboardComponent, children: [...dashboardRoutes], canActivate: [DashboardCanActivateGuard]},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

/**
 * This NgModule decorator has the meta data for this routing file.
 * It also exports the neccessary modules to be used outside this module.
 */
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

/**
 * This is the class that will be imported wherever needed.
 */
export class AppRoutingModule { }
