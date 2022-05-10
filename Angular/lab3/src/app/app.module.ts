import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DepartmentModule } from './department/department.module';
import { StudentModule } from './student/student.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    StudentModule,
    DepartmentModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
