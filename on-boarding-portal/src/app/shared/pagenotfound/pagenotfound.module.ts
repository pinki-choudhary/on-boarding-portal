import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { SharedMaterialModule } from '../shared-material.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    PageNotFoundComponent,
    SharedMaterialModule
  ]
})
export class PageNotFoundModule { }
