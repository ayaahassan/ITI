import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../_models/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user:User|null=new User(0,'',0,'');
  id=0;
  constructor(public ac:ActivatedRoute,public userSer:UserService,public router:Router) { }

  back()
  {
    this.router.navigate(['users']);

  }
    ngOnInit(): void {

      this.ac.params.subscribe((param) => {
        this.userSer
          .getUser(param['id'])
          .subscribe((data) => (this.user = data));
      });
      }

}
