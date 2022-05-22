import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './_models/department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  
  depts:Department[]=[];
  url:string="http//localhost:8080/department"

  constructor(public http:HttpClient) { }

  getAllDepts()
  {
    return this.http.get<Department[]>("localhost:8080/department");
  } 
  ADD(dept:Department)
  {
    return this.http.post<Department>(this.url,dept);
  }
  getDepartment(id:number)
  {
    return this.http.get<Department>(this.url+id)
  }
}
