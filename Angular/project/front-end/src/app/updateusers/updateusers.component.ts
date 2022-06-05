import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareUserService } from '../share-user.service';
import { UserService } from '../user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {

  updateUser:User=new User(0,'',0,'');
  constructor(public http:HttpClient,public userSer:UserService,public shareUserSrc:ShareUserService,public router:Router) { }
  update()
  {
    this.userSer.updateUser(this.updateUser).subscribe(res=>{
      alert('updated successfully');
      });
      this.router.navigate(['users']);
  }
  back()
  {
    this.router.navigate(['users']);

  }
  ngOnInit(): void {
    this.updateUser=this.shareUserSrc.getUser();
  }

}
