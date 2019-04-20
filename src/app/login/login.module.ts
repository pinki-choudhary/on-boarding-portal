// This is login feature module.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { InMemoryLoginDataService } from '../core/services/in-memory-login-data.service';
import { PortalHeaderComponent} from '../shared/portal-header/portal-header.component';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [AdminLoginComponent, PortalHeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryLoginDataService, { dataEncapsulation: false }
    ),
    SharedMaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PortalHeaderComponent,
    AdminLoginComponent,
    SharedMaterialModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class LoginModule { }
