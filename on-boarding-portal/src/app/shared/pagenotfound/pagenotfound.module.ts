import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    PageNotFoundComponent,
    CustomMaterialModule
  ]
})
export class PageNotFoundModule { }
