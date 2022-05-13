import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
})
export class DepartmentAddComponent implements OnInit {

  dept:Department=new Department(0,"","");
  constructor( public deptSer:DepartmentService,public router:Router) { }
  Add()
  {
   this.deptSer.ADD(this.dept);
   this.router.navigate(['department']);
  }
  back()
  {
    this.router.navigate(['department']);

  }

  ngOnInit(): void {
  }

}
