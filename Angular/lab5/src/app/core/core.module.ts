import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DepartmentModule } from '../department/department.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,RouterModule,DepartmentModule
  ],
  exports:[
    NavbarComponent
  ],
})
export class CoreModule { }
