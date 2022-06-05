import { Injectable } from '@angular/core';
import { User } from './_models/user';

@Injectable({
  providedIn: 'root'
})
export class ShareUserService {

  userData:User=new User(0,'',0,'');
  constructor() { }

  setUser(user:User)
  {
    this.userData=user;
  }
  getUser():User
  {
    return this.userData;
  }
}
