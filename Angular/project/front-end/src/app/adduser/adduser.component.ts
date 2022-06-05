import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  addUser:User=new User(0,'',0,'');
  constructor(public userSrc:UserService,public router:Router) { }
  
  Add()
  {
  this.userSrc.addUser(new User(0,this.addUser.first_name,this.addUser.age,this.addUser.email))
  .subscribe(a=>console.log(a));
  this.router.navigate(['users']);
  }

  back()
  {
    this.router.navigate(['users']);

  }
  ngOnInit(): void {
  }

}
