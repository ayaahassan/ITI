import { Component } from '@angular/core';
import { DepartmentService } from './department.service';
import { DeptService } from './dept.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DepartmentService,DeptService]
})
export class AppComponent {
  title = 'lab6';
  constructor(public deptSer:DeptService){

  }
  myFunc(){
          this.deptSer.dataSource().subscribe({
          next:     a=>{console.log(a)},
          error:    e=>{console.log(e)},
          complete: ()=>{console.log("complete data")}
        }
          );
  }
 
}
