import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any;
  usersLength: number = 0;
  // url:string="http://localhost:2000/USERS/"
  url: string = "http://localhost:3000/api/users"
  constructor(public http: HttpClient, public router: Router) { }
  getAllUsers() {
    this.users = this.http.get<User[]>(this.url);
    return this.http.get<User[]>(this.url);
  }
  getUser(id: number) {
    return this.http.get<User>(this.url + id);

  }
  addUser(user: User) {

    return this.http.post<User>(this.url, user)
      .pipe(map((res: any) => {
        return res;
      }));

  }
  updateUser(data: any) {
    return this.http.put<any>(this.url + data.id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteUser(id: number) {
    return this.http.delete<any>(this.url + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
