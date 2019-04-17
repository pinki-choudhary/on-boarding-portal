import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
  MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatGridListModule, MatExpansionModule,
  MatDividerModule, MatSlideToggleModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentifyStudentTypeDirective } from './directives/identify-student-type.directive';
import { SearchPipe } from './pipes/search.pipe';
import { CategoryWiseStudentPipe } from './pipes/category-wise-student.pipe';



@NgModule({
  declarations: [IdentifyStudentTypeDirective, SearchPipe, CategoryWiseStudentPipe],
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
    MatSlideToggleModule
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
    SearchPipe,
    CategoryWiseStudentPipe
  ]
})
export class SharedMaterialModule { }
