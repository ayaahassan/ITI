import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  dept: Department = new Department(0, "", 0, 0, "");
  showDept: Department = new Department(0, "", 0, 0, "");
  editDept: Department = new Department(0, "", 0, 0, "");

  isEdit: boolean = false;
  isShow:boolean=false;
  isShowImage: boolean = false;

  iti: string = "ITI-OS";
  power: number = 1;
  
  depts: Department[] = [
    new Department(1, "open source", 40, 5, "os.jpeg"),
    new Department(2, "system admin", 30, 4, "pd.png"),
    new Department(3, "mobile", 35, 3, "mob.png"),
  ]
  constructor() { }

  Add() {
    this.depts.push(new Department(this.dept.id, this.dept.name, this.dept.capacity, this.dept.rate, this.dept.image));
    this.dept.id = 0;
    this.dept.name = "";
    this.dept.capacity = 0;
    this.dept.rate = 0;
    this.dept.image = "";
  }

  show(id: number) {
    for (let i = 0; i < this.depts.length; i++) {

      if (this.depts[i].id == id) {
        this.showDept.id = this.depts[i].id;
        this.showDept.name = this.depts[i].name;
        this.showDept.capacity = this.depts[i].capacity;
        this.showDept.rate = this.depts[i].rate;
        this.showDept.image = this.depts[i].image;
        break;
      }
    }
    this.isShow=true;
  }
  hide()
  {
    this.isShow=false;

  }
  showImage() {
    this.isShowImage = !this.isShowImage;
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

    this.editDept.id = id;
    this.isEdit = true;

  }
  Update(id: number) {
    for (let i = 0; i < this.depts.length; i++) {
      if (this.editDept.name != "" && this.editDept.id != 0 && this.editDept.capacity != 0) {
        if (this.depts[i].id == this.editDept.id) {
          this.editDept.image = this.depts[i].image;
          this.depts[i] = this.editDept;
          break;
        }
      }
    }
    this.isEdit = false;

  }
  cancel()
  {
    this.isEdit = false;
  }
  ngOnInit(): void {
  }

}
