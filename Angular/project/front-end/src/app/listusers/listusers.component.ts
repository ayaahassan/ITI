import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ShareUserService } from '../share-user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  usersList:User[]=[];
  displayedColumns: string[] = ['id','name','actions'];
  dataSource = this.usersList;
  constructor(public userSer:UserService,public router:Router,public shareUserSrc:ShareUserService) { }

  ngOnInit(): void {

      this.userSer.getAllUsers().subscribe(data=>{
      this.usersList=data
    },
    error => console.log('error', error)
    );
  
  }
 update(user:User)
 {
   this.shareUserSrc.setUser(user);
 }

  delete(id:number)
  {
    if(confirm("Are you sure to delete?"))
    {
    this.userSer.deleteUser(id).subscribe(a=>{alert('user deleted successfully')
    //this.router.navigate(['users']); page wasn't refresh!?
    window.location.reload();
    
  }
    ,error=>console.log('error',error));

    
    }
  }

}
