import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { InMemoryLoginDataService } from '../core/services/in-memory-login-data.service';
import { PortalHeaderComponent} from '../shared/portal-header/portal-header.component';

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
    CustomMaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PortalHeaderComponent,
    AdminLoginComponent,
    CustomMaterialModule
  ]
})
export class LoginModule { }
