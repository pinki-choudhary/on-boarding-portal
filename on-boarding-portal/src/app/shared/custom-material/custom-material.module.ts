import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
  MatDatepickerModule, MatNativeDateModule, MatTabsModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
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
    MatNativeDateModule 
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
    MatNativeDateModule
  ]
})
export class CustomMaterialModule { }
