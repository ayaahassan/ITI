import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {

  deptlist:Department []=[];
  constructor(public deptSer:DepartmentService,public router:Router) { }

  Add()
  {
    this.router.navigate(['/department','add']);
  }
  ngOnInit(): void {
  this.deptSer.getAllDepts().subscribe(data=>{
    this.deptlist=data;
  });
  }

}
