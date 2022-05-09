import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  dept: Department = new Department(0, "", 0);
  showDept: Department = new Department(0, "", 0);

  iti: string = "iti";
  depts: Department[] = [
    new Department(1, "open source", 40),
    new Department(2, "system admin", 30),
    new Department(3, "mobile", 35),
  ]
  constructor() { }
  Add() {
    this.depts.push(new Department(this.dept.id, this.dept.name, this.dept.capacity));
    this.dept.id = 0;
    this.dept.name = "";
    this.dept.capacity = 0;
    console.log( 'test');

  }
  show(id: number) {
   // var table = document.getElementsByClassName("show");
    for (let i = 0; i < this.depts.length; i++) {

      if (this.depts[i].id == id) {
        this.showDept.id = this.depts[i].id;
        this.showDept.name = this.depts[i].name;
        this.showDept.capacity = this.depts[i].capacity;

        break;
      }
    }

  }
  deleteitem(id: number) {
    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i].id == id) {
        this.depts.splice(i, 1);
        break;
      }
    }
  }
  Edit(id: number) {
    this.show(id);

  }
  Update(id: number) {
    for (let i = 0; i < this.depts.length; i++) {
      if (this.dept.name != "" && this.dept.id != 0 && this.dept.capacity != 0) {
        if (this.depts[i].id = id) {
          this.depts[i] = this.dept;
          break;
        }
      }
    }

  }
  ngOnInit(): void {
  }

}
