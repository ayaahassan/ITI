import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
})
export class DepartmentAddComponent implements OnInit {

  dept:Department=new Department(0,"","");
  constructor( public deptSer:DepartmentService) { }
  Add()
  {
   this.deptSer.ADD(this.dept);
  }

  ngOnInit(): void {
  }

}
