import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor() { }
  dataSource()
  { 
    return new Observable (a=>{
      setTimeout(() => {
        a.next(200);
      }, 1000);
      setTimeout(()=>{
        a.next(800);
      },3000);
      setTimeout(a=>{
        a.next(1200);
      },6000);

    })
  }
}
