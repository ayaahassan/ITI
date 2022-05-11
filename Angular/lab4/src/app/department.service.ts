import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private depts:Department[]=[
    new Department(100,"OS","Alex"),
    new Department(200,"PD","Alex"),
    new Department(300,"Mob","Alex"),
    new Department(400,"System Admin","Alex"),
  ];
  getAllDepts()
  {
    return this.depts;
  } 
  ADD(dept:Department)
  {
    this.depts.push(dept);
  }
  getDepartment(id:number)
  {
    for(let i=0;i<this.depts.length;i++)
    {
             if(this.depts[i].id==id)
             {
               return this.depts[i];
             }

    }
    return null;
  }
  constructor() { }
}
