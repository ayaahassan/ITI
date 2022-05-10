import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    DepartmentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,  
    MatSliderModule,


     
  ],
  exports:[
   DepartmentComponent
  ]
})
export class DepartmentModule { }
