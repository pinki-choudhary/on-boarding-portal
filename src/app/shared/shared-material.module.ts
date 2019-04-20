// This is a shared module that is used throughout the app.

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCheckboxModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
        MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
        MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatGridListModule, MatExpansionModule,
        MatDividerModule, MatSlideToggleModule } from '@angular/material';

import { ToastrModule } from 'ngx-toastr';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentifyStudentTypeDirective } from './directives/identify-student-type.directive';
import { SearchPipe } from './pipes/search.pipe';
import { CategoryWiseStudentPipe } from './pipes/category-wise-student.pipe';
import { PortalFooterComponent } from './portal-footer/portal-footer.component';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [IdentifyStudentTypeDirective, SearchPipe, CategoryWiseStudentPipe, PortalFooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    MatSlideToggleModule,
    ToastrModule.forRoot()
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    IdentifyStudentTypeDirective,
    MatSlideToggleModule,
    ToastrModule,
    SearchPipe,
    CategoryWiseStudentPipe,
    PortalFooterComponent
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class SharedMaterialModule { }
